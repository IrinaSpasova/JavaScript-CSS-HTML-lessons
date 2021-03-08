function data(input) {
    /*Формула за лица на правоъгълник S=a*b */
    let hight = Number(input[0]);
    let width = Number(input[1]);

    /*LOGIC*/
    let w = width * 100;
    let h = hight * 100;
    let wTrainingLab = w - 100;
    /*let workPlacesWidthCount = (wTrainingLab / 70).toFixed(0);  закръглява, трябва да се внимава с него. Judge гърми*/
    let workPlacesWidthCount = Math.floor(wTrainingLab / 70);
    let workPlacesHightCount = Math.floor(h / 120);
    let workPlaces = workPlacesHightCount * workPlacesWidthCount - 3;

    console.log(workPlaces);

}
data(["8.4", "5.2"]);