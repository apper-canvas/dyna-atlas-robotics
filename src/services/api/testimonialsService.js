import testimonialsData from "@/services/mockData/testimonials.json";

class TestimonialsService {
  async getAll() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 350));
    return [...testimonialsData];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const item = testimonialsData.find(testimonial => testimonial.Id === parseInt(id));
    return item ? { ...item } : null;
  }

  async create(item) {
    await new Promise(resolve => setTimeout(resolve, 450));
    const newId = Math.max(...testimonialsData.map(testimonial => testimonial.Id)) + 1;
    const newItem = { ...item, Id: newId };
    testimonialsData.push(newItem);
    return { ...newItem };
  }

  async update(id, data) {
    await new Promise(resolve => setTimeout(resolve, 450));
    const index = testimonialsData.findIndex(testimonial => testimonial.Id === parseInt(id));
    if (index !== -1) {
      testimonialsData[index] = { ...testimonialsData[index], ...data };
      return { ...testimonialsData[index] };
    }
    return null;
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 450));
    const index = testimonialsData.findIndex(testimonial => testimonial.Id === parseInt(id));
    if (index !== -1) {
      const deleted = testimonialsData.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }
}

export default new TestimonialsService();