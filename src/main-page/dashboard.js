export default function Dashboard() {
    const items_data = [
        {id: 1, name: "Products" ,data: 30},
        {id: 2, name: "Today's transactions" ,data: 10},
        {id: 3, name: "Today's sales" ,data: 12065}
    ];

    const items = items_data.map(item =>
        <div className="pill">
            <span className="big">{item.data}</span>
            <span>{item.name}</span>
        </div>
    );

    return (
        <div className="main2">
            {items}
        </div>
    );
}
