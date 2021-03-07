import axios from 'axios';
import { Board, List, Member } from './interfaces';

const BASE_URL = 'https://api.trello.com/1';
const KEY = '66050e2c572e07f079166db1ae85e79d';
const TOKEN = '79bfd2df83f0384425e8768165bd3f39bc8e5ba79eabcf8c0ba42ec49076045c';
const AUTH = `key=${KEY}&token=${TOKEN}`;
const BORAR_ID = '6043bc7c1097aa4c08408b1d';

export default class API {
  static async getListAndCategories(): Promise<List[]> {
    try {
      const { data: columnsData }: {data: List[]} = await axios.get(`${BASE_URL}/boards/${BORAR_ID}/lists?${AUTH}`);
      const list: List[] = [];
      await Promise.all(
        columnsData.map(async (column: List) => {
          const cardsData = await axios.get(`${BASE_URL}/lists/${column.id}/cards?${AUTH}`);
          list.push({ ...column, cards: cardsData.data });
        }),
      );
      return list;
    } catch (error) {
      return error;
    }
  }

  static async getBoard(): Promise<Board> {
    try {
      const { data } = await axios.get(`${BASE_URL}/boards/${BORAR_ID}/?${AUTH}`);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getMembers(): Promise<Member[]> {
    try {
      const { data } = await axios.get(`${BASE_URL}/boards/${BORAR_ID}/members?${AUTH}`);
      return data;
    } catch (error) {
      return error;
    }
  }
}
