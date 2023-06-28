const { database } = require("./databse");

class TravelBot {
  constructor() {
    this.lastCity = null;
    this.lastTopic = null;
    this.failCounter = 0;
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
      'localAttractions': ['attractions', 'visit', 'see', 'sights'],
      'localCuisine': ['food', 'cuisine', 'eat', 'dishes', 'delicious'],
      'natureSpots': ['nature', 'parks', 'outdoors', 'scenery'],
      'activities': ['activities', 'do', 'perform', 'actions'],
    };

    for (let topic in keywordsByTopic) {
      if (keywordsByTopic[topic].some(keyword => question.toLowerCase().includes(keyword))) {
        this.lastTopic = topic;
        return topic;
      }
    }

    return this.lastTopic;
  }

  detectItem(question, city, topic) {
    if (!city || !topic || !database[city][topic]) {
      return null;
    }

    for (let item in database[city][topic]) {
      if (question.toLowerCase().includes(item.toLowerCase())) {
        return item;
      }
    }

    return null;
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

    switch (topic) {
      case 'localAttractions':
      case 'activities':
        if (question.toLowerCase().includes("tell me more about")) {
          response += info['description']
          response += `It has a rating of ${info['rating']}. `;
          response += `It is open between ${info['workingHours']}. `;
          response += `The entry price is ${info['price']}. `;
          response += `It's located at ${info['location']}.`;
          response += info['tips']
        }

        if (["description", "info", "information"].some(keyword => question.toLowerCase().includes(keyword))) {
          response += info['description']
        }

        if (["rating", "review", "review", "point"].some(keyword => question.toLowerCase().includes(keyword))) {
          response += `It has a rating of ${info['rating']}. `;
        }

        if (["hour", "working", "open", "close"].some(keyword => question.toLowerCase().includes(keyword))) {
          response += `It is open between ${info['workingHours']}. `;
        }

        if (["price", "how much", "ticket", "buy"].some(keyword => question.toLowerCase().includes(keyword))) {
          response += `The entry price is ${info['price']}. `;
        }

        if (["where", "location", "address", "located"].some(keyword => question.toLowerCase().includes(keyword))) {
          response += `It's located at ${info['location']}.`;
        }

        if (["tips", "advice", "recommend"].some(keyword => question.toLowerCase().includes(keyword))) {
          response += info['tips']
        }

        break;

      case 'localCuisine':
        response += `The ${item} in ${city} includes the following ingredients: ${info['ingredients'].join(", ")}. `;
        response += `The average price is ${info['price']}. `;
        response += `${info['description']} It's recommended to try this at ${info['recommendedPlaces'].join(", ")}.`;
        break;
    }

    return response;
  }

  getTopicDescription(topic, city) {
    let items = null;
    switch (topic) {
      case 'localAttractions':
      case 'localCuisine':
      case 'activities':
        items = Object.keys(database[city][topic]);
        break;
      case 'natureSpots':
        items = database[city][topic].map(spot => spot.name);
        break;
    }

    switch (topic) {
      case 'localAttractions':
        return `I recommend visiting these places: ${items.join(", ")}. For more information about a specific place, please mention it in your question.`;
      case 'localCuisine':
        return `you should try these local dishes: ${items.join(", ")}. For more information about a specific dish, please mention it in your question.`;
      case 'natureSpots':
        return `these are some beautiful nature spots: ${items.join(", ")}. For more information about a specific nature spot, please mention it in your question.`;
      case 'activities':
        return `these are some activities you can enjoy: ${items.join(", ")}. For more information about a specific activity, please mention it in your question.`;
      default:
        return 'I\'m sorry, I couldn\'t understand your question.';
    }
  }

  travelBot(question) {
    const city = this.detectCity(question);
    const topic = this.detectKeyword(question);
    const item = this.detectItem(question, city, topic);

    if (!city && !this.lastCity) {
      this.failCounter++;
    } else if (!topic && !this.lastTopic) {
      this.failCounter++;
    } else {
      // Reset the counter if the bot understands the question
      this.failCounter = 0;
    }

    // If the bot fails too many times, start over
    if (this.failCounter >= 3) {
      this.failCounter = 0;
      this.lastCity = null;
      this.lastTopic = null;
      return 'Let\'s start over. Could you please tell me which city you are interested in?';
    }

    if (!city) {
      // If there is no city detected and also no last city remembered, ask for city
      return 'Could you specify which city you are interested in?';
    }

    if (!topic) {
      // If there is no topic detected and also no last topic remembered, ask for topic
      return 'Could you clarify your question? Are you interested in local attractions, cuisine, nature spots, or activities?';
    }

    if (item) {
      return this.answerQuestion(city, topic, item, question);
    } else {
      return `In ${city}, ${this.getTopicDescription(topic, city)}`;
    }
  }

}

const bot = new TravelBot();

module.exports = {
  bot
}