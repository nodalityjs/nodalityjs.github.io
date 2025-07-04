# Integration
You can easily integrate this library with React.js and Vue.js libraries.

You can use the ```Extracted``` component to integrate this library into your React application.

```js
<Extracted view={
    new Text("Hello React!")
}/>
```

Here, you can see a more complex example that fetches data from API a displays them in List.
```js

    function Detail(props) {
        const [posts, setPosts] = React.useState([]);

        React.useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => setPosts(json.slice(0, 3)))
                .catch(error => console.error('Error:', error));
        }, []);

        const addPost = () => {
            const newPost = {
                id: posts.length + 1,
                title: `Post ${posts.length + 1}`,
            };

            setPosts(prevPosts => [...prevPosts, newPost]);
        };

        return (
            <div>
                <h3>Detail</h3>
                <Extracted view={
                    new Text("Post count: " + posts.length)
                        .set({ color: "green", font: "Arial", weight: "bold" })
                } />

                <Extracted view={ // also changes, Counter view outside does not
                    new Text("Quotes")
                        .set({ color: "green", font: "Arial" })
                } />

                <button onClick={() => props.setIsNav(true)}>←</button>
                { // adding vhanges all instances, not with regular h3, a bit worse performance
                    posts.map(post => (
                        <Extracted view={ // also changes, Counter view outside does not
                            new Text(post.title).set({ color: "green", font: "Arial", weight: "bold" })
                        } />
                        // not changing with h3
                        // <h3 key={post.id}>{post.title}</h3>
                    ))
                }
                <button onClick={addPost}>Add Post</button>
            </div>
        );
    }
    ```