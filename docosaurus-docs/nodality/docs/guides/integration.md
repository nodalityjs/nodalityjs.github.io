# Integration
You can easily integrate this library with React.js and Vue.js libraries.


## React integration
To quickly scaffold a React app you can use:

```sh
npx create-nodality-react my-app
```
You can use the ```Extracted``` component to integrate this library into your React application.

Here, you can see a more complex example that fetches data from API a displays them in List.
```js
import logo from './logo.svg';
import './App.css';
import {Text, Wrapper} from "nodality";
import {React} from "react";
import {useState, useRef, useEffect} from "react";

function Extracted(props) {
  let ref = useRef();

  useEffect(() => {
     let t = props.view;
     ref.current.appendChild(t.render());
     return () => {
          if (ref.current) {
              ref.current.innerHTML = "";
          }
      };
 }, [props]); 
 return <div ref={ref} />;
}

function Wrappera({ setIsNav }) {
  const [count, setCount] = useState(0);
  return (
      <Extracted
          view={
              new Wrapper().set({ background: "orange" }).add([
                  new Text(`Counter ${count}`)
                      .set({
                          fluidc: "S1",
                          font: "Arial",
                          onTap: () => {
                              setCount(count + 1);
                              setIsNav && setIsNav(false);
                          }
                      })
              ])
          }
      />
  );
}

function Final({ setIsNav }) {
  return (
      <>
          <Wrappera />
          <Wrappera setIsNav={setIsNav}/>
          <Wrappera setIsNav={setIsNav}/>
      </>
  );
}



function App() {
  return (
    <div className="App">    
        <Final/>
  );
}

export default App;

```



## Vue.js integration
You can also integrate this library with Vue.js. Here is the complete example.
To quickly scaffold a Vue app you can use:

```sh
npx create-nodality-vue my-app
```

```vue
<template>
  <HelloWorld :text="textInstance" v-model:msg="welcomeMessage"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {Text} from "nodality";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
 
  watch: {
    // Watch for changes to welcomeMessage and recreate the instance
    welcomeMessage() {
      console.log(this.welcomeMessage) // THIS WORKS
       this.textInstance = new Text(this.welcomeMessage).set({ size: "S1", color: "#1abc9c" });
    },
  },
  data() {
    return {
      welcomeMessage: "Welcome to Your Vue.js App", // Define a reactive property
     textInstance: null
    }
  },
   created() {
    // Initialize the Text instance when the component is created
    this.textInstance = new Text(this.welcomeMessage).set({ size: "S1", color: "#1abc9c" });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


  // 13:21:24 <slot> 26/04/2024
```

### HelloWorld.vue
```vue
<script setup>
import { useTemplateRef, onMounted, defineProps, defineEmits, watch } from 'vue'
//import {Text} from "../lib/TextCopy.js";

// Define props to accept the msg value
const props = defineProps({
  msg: String,
  text: Object
}) 

const emit = defineEmits(['update:msg'])

// the first argument must match the ref value in the template
const input = useTemplateRef('my-input')
let mycomp = useTemplateRef('my-comp')

onMounted(() => {
  input.value.focus()
 let ela = props.text.render();//document.createElement("h1");
 mycomp.value.appendChild(ela);
})

watch(() => props.msg, () => { // 12:21:57 Wow!!!

 mycomp.value.innerHTML = ""; // Clear existing content
    const element = props.text.render(); // Call the render method
    mycomp.value.appendChild(element);
})

function updateMessage(event) {
  emit('update:msg', event.target.value)
}
</script>

<template>
  <input ref="my-input" :value="msg" @input="updateMessage" />
  <div ref="my-comp"/>
</template>
```
