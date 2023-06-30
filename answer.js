const { database } = require("./databse");
const FuzzySet = require('fuzzyset.js');
const nlp = require('compromise');

class TravelBot {
  constructor() {
    this.lastCity = null;
    this.lastTopic = null;
    this.failCounter = 0;
    this.hasCurrentQuestionTopic = false;
  }

  // Helper function to determine city from a sentence
  detectCity(sentence) {
    for (let city in database) {
      if (sentence.toLowerCase().includes(city.toLowerCase())) {
        this.lastCity = city;
        return city;
      }
    }
    return this.lastCity;
  }

  // Helper function to find keywords in a question
  detectKeyword(question) {
    const keywordsByTopic = {
      localAttractions: ["attractions", "visit", "see", "sights"],
      localCuisine: ["food", "cuisine", "eat", "dishes", "delicious"],
      activities: ["activities", "do", "perform", "actions"],
    };

    for (let topic in keywordsByTopic) {
      if (this.keywordFind(keywordsByTopic[topic], question)) {
        this.lastTopic = topic;
        this.hasCurrentQuestionTopic = true;
        return topic;
      }
    }

    this.hasCurrentQuestionTopic = false;
    return this.lastTopic;
  }

  detectItem(question, city, topic) {
    if (!city || !topic || !database[city][topic]) {
      return null;
    }

    // Get a list of all items
    let items = Object.keys(database[city][topic]);

    // Create a new fuzzy set with these items
    // We are using FuzzySet so that simple typos won't break the conversation
    let fset = FuzzySet(items);

    // Get a match from the fuzzy set
    let result = fset.get(question);

    // If a match was found, return it
    if (result) {
        return result[0][1];
    }

    return null;
  }

  keywordFind(keywords, question) {
    return keywords.some(keyword => question.toLowerCase().includes(keyword));
  }

  answerQuestion(city, topic, item, question) {
    if (!database[city]) {
      return `I'm sorry, I couldn't find any information about ${city}.`;
    }
    if (!database[city][topic]) {
      return `I'm sorry, I couldn't find any information about ${topic} in ${city}.`;
    }
    if (!database[city][topic][item]) {
      return `I'm sorry, I couldn't find any information about ${item} in ${city}.`;
    }

    let info = database[city][topic][item];
    let response = "";
    
    let topicKeys = ["tell me about", "tell me more about"];
    let descriptionKeys = ["description", "info", "information"];
    let ratingKeys = ["rating", "review", "review", "point"];
    let hoursKeys = ["hour", "working", "open", "close"];
    let priceKeys = ["price", "how much", "ticket", "buy"];
    let locationKeys = ["where", "location", "address", "located"];
    let tipsKeys = ["tips", "advice", "recommend"];

    switch (topic) {
      case "localAttractions":
        if (this.keywordFind(topicKeys, question)) {
          response += info["description"];
          response += `It has a rating of ${info["rating"]}. `;
          response += `It is open between ${info["workingHours"]}. `;
          response += `The entry price is ${info["price"]}. `;
          response += `It's located at ${info["location"]}.`;
          response += info["tips"];
        }
        
        if (this.keywordFind(descriptionKeys, question)) {
          response += info["description"];
        }

        if (this.keywordFind(ratingKeys, question)) {
          response += `It has a rating of ${info["rating"]}. `;
        }

        if (this.keywordFind(hoursKeys, question)) {
          response += `It is open between ${info["workingHours"]}. `;
        }

        if (this.keywordFind(priceKeys, question)) {
          response += `The entry price is ${info["price"]}. `;
        }

        if (this.keywordFind(locationKeys, question)) {
          response += `It's located at ${info["location"]}.`;
        }

        if (this.keywordFind(tipsKeys, question)) {
          response += info["tips"];
        }

        break;
      case "activities":
        if (this.keywordFind(topicKeys, question)) {
          response += info["description"];
          response += `It has a rating of ${info["rating"]}. `;
          response += `The entry price is ${info["price"]}. `;
          response += `The items you will need is: ${info["itemsNeeded"]}.`;
          response += info["tips"];
        }

        if (this.keywordFind(descriptionKeys, question)) {
          response += info["description"];
        }

        if (this.keywordFind(ratingKeys, question)) {
          response += `It has a rating of ${info["rating"]}. `;
        }

        if (this.keywordFind(priceKeys, question)) {
          response += `The entry price is ${info["price"]}. `;
        }

        if (this.keywordFind(tipsKeys, question)) {
          response += info["tips"];
        }

        if (this.keywordFind(["items", "need", "recommend"], question)) {
          response += info["itemsNeeded"];
        }

        break
      case "localCuisine":
        if (this.keywordFind(topicKeys, question)) {
          response += info["description"];
          response += `The entry price is ${info["price"]}. `;
          response += `The ingredients of this dish is: ${info["ingredients"]}.`;
        }

        if (this.keywordFind(["ingredients", "include", "contain"], question)) {
          response += `The ${item} in ${city} includes the following ingredients: ${info[
            "ingredients"
          ].join(", ")}. `;
        }

        if (this.keywordFind(priceKeys, question)) {
          response += `The average price is ${info["price"]}. `;
        }

        if (this.keywordFind(descriptionKeys, question)) {
          response += `${info["description"]} It's recommended to try this at ${info["recommendedPlaces"].join(", ")}.`;
        }
        break;
    }

    return response;
  }

  getTopicDescription(topic, city) {
    let items = null;
    switch (topic) {
      case "localAttractions":
      case "localCuisine":
      case "activities":
        items = Object.keys(database[city][topic]);
        break;
    }

    switch (topic) {
      case "localAttractions":
        return `I recommend visiting these places: ${items.join(
          ", "
        )}. For more information about a specific place, please mention it in your question.`;
      case "localCuisine":
        return `you should try these local dishes: ${items.join(
          ", "
        )}. For more information about a specific dish, please mention it in your question.`;

      case "activities":
        return `these are some activities you can enjoy: ${items.join(
          ", "
        )}. For more information about a specific activity, please mention it in your question.`;
      default:
        return "I'm sorry, I couldn't understand your question.";
    }
  }

  travelBot(question) {
    const city = this.detectCity(question);
    const topic = this.detectKeyword(question);
    const item = this.detectItem(question, city, topic);

    // If the bot fails too many times, start over
    if (this.failCounter >= 3) {
      this.failCounter = 0;
      this.lastCity = null;
      this.lastTopic = null;
      return "Let's start over. Could you please tell me which city you are interested in?";
    }

    // Check if there is city, topic and item
    if (!city && !topic && !item) {
      this.failCounter++;
      return "I'm sorry, I didn't understand your question. Could you please provide more details?";
    }

    // Check if the question contains meaningful data
    if (!this.isQuestionValid(question)) {
      this.failCounter++;
      return "I'm sorry, I didn't understand your question. Could you please provide more details?";
    }

    // Check if the current question contains topic or item
    if (!this.hasCurrentQuestionTopic && !item) {
      this.failCounter++;
      return "I'm sorry, I didn't understand your question. Could you please provide more details?";
    }

    // Reset the counter if the bot understands the question
    this.failCounter = 0;
    
    if (!city) {
      // If there is no city detected and also no last city remembered, ask for city
      return "Could you specify which city you are interested in?";
    }

    if (!topic) {
      // If there is no topic detected and also no last topic remembered, ask for topic
      return "Could you clarify your question? Are you interested in local attractions, cuisine, or activities?";
    }

    if (item) {
      return this.answerQuestion(city, topic, item, question);
    }

    if (city && topic) {
      return `In ${city}, ${this.getTopicDescription(topic, city)}`;
    }
  }

  isQuestionValid(question) {
    let doc = nlp(question);
  
    // Checks if the sentence contains a question
    if (doc.sentences().isQuestion().out('array').length > 0) {
      return true;
    }

    if (question.toLowerCase().includes("tell me")) {
      return true;
    }

    if (question.toLowerCase().includes("give me")) {
      return true;
    }
    
    return false;
  }
}

const bot = new TravelBot();

module.exports = {
  bot,
};
