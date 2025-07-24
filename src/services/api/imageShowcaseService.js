import mockData from '@/services/mockData/imageShowcase.json';

let imageShowcaseData = [...mockData];

const imageShowcaseService = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...imageShowcaseData]);
      }, 300);
    });
  },

  getById: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = imageShowcaseData.find(item => item.Id === parseInt(id));
        if (item) {
          resolve({ ...item });
        } else {
          reject(new Error('Image showcase item not found'));
        }
      }, 200);
    });
  },

  getByCategory: async (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = imageShowcaseData.filter(item => 
          item.category.toLowerCase() === category.toLowerCase()
        );
        resolve([...filtered]);
      }, 250);
    });
  }
};

export default imageShowcaseService;