import './ChartBar.css';

export default function ChartBar(props) {
    let barHeight = '0%';

    if (props?.max > 0) {
        barHeight = Math.round((props?.value / props?.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar-fill' style={{'height': barHeight}}></div>
            </div>
            <label className='chart-bar__label'>{props.label}</label>
        </div>
    );
}