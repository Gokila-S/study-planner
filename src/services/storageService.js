class StorageService {
  constructor() {
    // configurations
    this.KEY = "study-planner";
  }

  getData() {
    let data = localStorage.getItem(this.KEY);
    if (data === null) {
      // then initialize the data.
      data = {
        users: [],
        items: {},
      };
      this.saveData(data);
      return data;
    }
    return JSON.parse(data);
  }

  saveData(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }
}

const storageService = new StorageService();
export default storageService;
