import navigationData from "@/services/mockData/navigation.json";

class NavigationService {
  async getAll() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    return [...navigationData];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const item = navigationData.find(nav => nav.Id === parseInt(id));
    return item ? { ...item } : null;
  }

  async create(item) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newId = Math.max(...navigationData.map(nav => nav.Id)) + 1;
    const newItem = { ...item, Id: newId };
    navigationData.push(newItem);
    return { ...newItem };
  }

  async update(id, data) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = navigationData.findIndex(nav => nav.Id === parseInt(id));
    if (index !== -1) {
      navigationData[index] = { ...navigationData[index], ...data };
      return { ...navigationData[index] };
    }
    return null;
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = navigationData.findIndex(nav => nav.Id === parseInt(id));
    if (index !== -1) {
      const deleted = navigationData.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }

  async setActiveItem(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    // Reset all items to inactive
    navigationData.forEach(item => item.isActive = false);
    // Set the specified item as active
    const activeItem = navigationData.find(nav => nav.Id === parseInt(id));
    if (activeItem) {
      activeItem.isActive = true;
    }
    return [...navigationData];
  }
}

export default new NavigationService();