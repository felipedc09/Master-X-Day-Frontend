import axios from 'axios';

const BASE_URL = 'https://api.trello.com/1';
const KEY = '66050e2c572e07f079166db1ae85e79d';
const TOKEN = '79bfd2df83f0384425e8768165bd3f39bc8e5ba79eabcf8c0ba42ec49076045c';
const AUTH = `key=${KEY}&token=${TOKEN}`;
const BORAR_ID = '6043bc7c1097aa4c08408b1d'
interface List {
  id: string;
  cards: [];
}
export default class API {
  static async getListAndCategories(): Promise<any[]> {
    try {
      const { data } = await axios.get(`${BASE_URL}/boards/${BORAR_ID}/lists?${AUTH}`);
      const listOfCards: object[] = [];
      await Promise.all(data.map(async (list: List) => {
        const cards = await axios.get(`${BASE_URL}/lists/${list.id}/cards?${AUTH}`);
        listOfCards.push({ ...list, cards: cards.data });
      }));
      return listOfCards;
    } catch (error) {
      return error;
    }
  }

  static async getBoard(): Promise<any> {
    try {
      const { data } = await axios.get(`${BASE_URL}/boards/${BORAR_ID}/?${AUTH}`);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getMembers(): Promise<any> {
    try {
      const result = await axios.get(`${BASE_URL}/boards/${BORAR_ID}/members?${AUTH}`);
      return result.data;
    } catch (error) {
      return error;
    }
  }
}
