const colors: Array<string> = ['white', 'black', 'blue', 'yellow', 'red'];

const colorList = colors.map((color, index) => ({
    x: 50 + index * 120,  // 每个矩形在 x 轴上分开一些距离
    y: 50,
    width: 100,
    height: 40,
    fill: color,
    cornerRadius: 10,
    stroke: 'black',
    strokeWidth: 2
}));

export default{ colorList };