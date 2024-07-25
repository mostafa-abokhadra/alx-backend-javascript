import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const instances = [];
  for (let i = 0; i < sizes.length; i += 1) {
    const inst = new ClassRoom(sizes[i]);
    instances.push(inst);
  }
  return instances;
}
