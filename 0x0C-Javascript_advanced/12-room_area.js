let roomDimensions = () => {
    Width = 50;
    length = 100; 
    let getArea = (width, length) => width * length;
}
let boundGetArea = roomDimensions.getArea.bind(roomDimensions);