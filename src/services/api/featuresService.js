import featuresData from "@/services/mockData/features.json";

class FeaturesService {
  async getAll() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...featuresData];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const item = featuresData.find(feature => feature.Id === parseInt(id));
    return item ? { ...item } : null;
  }

  async create(item) {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newId = Math.max(...featuresData.map(feature => feature.Id)) + 1;
    const newItem = { ...item, Id: newId };
    featuresData.push(newItem);
    return { ...newItem };
  }

  async update(id, data) {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = featuresData.findIndex(feature => feature.Id === parseInt(id));
    if (index !== -1) {
      featuresData[index] = { ...featuresData[index], ...data };
      return { ...featuresData[index] };
    }
    return null;
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = featuresData.findIndex(feature => feature.Id === parseInt(id));
    if (index !== -1) {
      const deleted = featuresData.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }
}

export default new FeaturesService();