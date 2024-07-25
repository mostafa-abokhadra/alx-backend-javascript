import ClassRoom  from './1-make_classrooms'
export default function initializeRooms() {
    const sizes = [19, 20, 34];
    let instances = []
    for(let i = 0; i < sizes.length; i++){
        let inst = new ClassRoom(sizes[i])
        instances.push(inst)
    }
    return instances;
}