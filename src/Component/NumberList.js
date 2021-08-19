
export default function NumberList(props) {

    // const numbers = props.numbers;


    // const listItems = numbers.map((number) =>

    //     <li >{number}</li>
    // );



    const sidebar = (
        <ul>
            {props.postss.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const sid = props.postss.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            {/* <p>{post.content}</p> */}
        </div>
    );

    const content = props.postss.map((post) =>
        <div key={post.id}>
            {/* <h3>{post.id * 2}</h3> */}
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );




    return (
        <div>
            {sidebar}
            <hr />

            {sid}
            <hr />
            {content}
            <hr />
            <ul>
                {/* {numbers.map((number) =>
                    <ListItem key={number.toString()}
                        value={number} />
                )} */}
            </ul>

            {/* <ul>{listItems}</ul> */}

            <hr />


        </div>
    );


    // ===========================================================
    // function ListItem(props) {
    //     return <li>{props.value}</li>;
    // }
    // const numbers = [1, 2, 3, 4, 5];

    // ============================================================


    // return (
    //     <div className="users">
    //         {data_1.map((user) => (
    //             <div className="user">{user}</div>
    //         ))}
    //     </div>
    // );
};