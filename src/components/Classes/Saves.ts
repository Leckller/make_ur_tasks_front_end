export default class Saves {
  public localGet = (key: string): any => {
    const search = localStorage.getItem(key);
    return search ? JSON.parse(search) : null;
  };

  public localSave = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
}

export const LocalSaves = new Saves();
