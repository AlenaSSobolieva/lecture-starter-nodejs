import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getAll() {
    return fighterRepository.getAll();
  }

  getOne(id) {
    const fighter = fighterRepository.getOne({ id });

    if (!fighter) {
      throw Error("Fighter not found");
    }

    return fighter;
  }

  search(search) {
    const item = fighterRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  create(fighterData) {
    const { name } = fighterData;
    const existingNames = fighterRepository.getAll();

    for (const usedName of existingNames) {
      if (usedName.name.toLowerCase() === name.toLowerCase()) {
        throw Error("Fighter with this name already exists");
      }
    }
    return fighterRepository.create(fighterData);
  }

  update(id, fighterData) {
    const fighter = this.getOne(id);
    const { name } = fighterData;

    if (name) {
      const existingNames = fighterRepository.getAll();

      for (const usedName of existingNames) {
        if (
          usedName.name.toLowerCase() === name.toLowerCase() &&
          usedName.id !== fighter.id
        ) {
          throw Error("Fighter with this name already exists");
        }
      }
    }

    return fighterRepository.update(id, fighterData);
  }

  delete(id) {
    this.getOne(id);

    return fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();

export { fighterService };
