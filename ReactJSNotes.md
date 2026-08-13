# React.js Complete Notes

## Zero to Advanced Level and Interview Preparation

---

# 1. What Is React?

React is a JavaScript library used to create user interfaces from reusable pieces called **components**.

A component can be:

- A small button
- A navigation bar
- A product card
- An entire page
- An application layout

React follows a **declarative, component-based approach**. Instead of manually telling the browser how to change the DOM step by step, you describe what the UI should look like for the current data, and React handles the necessary updates.

## Without React: Imperative approach

```js
const button = document.querySelector("#btn");
const heading = document.querySelector("#heading");

let count = 0;

button.addEventListener("click", () => {
  count++;
  heading.textContent = `Count: ${count}`;
});
```

Here, we manually:

1. Select DOM elements.
2. Store the count.
3. Listen for an event.
4. Update the DOM.

## With React: Declarative approach

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

We describe:

> When the state is `count`, display that count.

React updates the DOM when the state changes.

---

# 2. Why Do We Use React?

## 2.1 Reusable components

You can create a component once and use it multiple times.

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <div>
      <Button text="Login" />
      <Button text="Register" />
      <Button text="Logout" />
    </div>
  );
}
```

## 2.2 Declarative UI

You describe the UI for each state.

```jsx
function UserStatus({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back" : "Please log in"}</h1>;
}
```

## 2.3 Component-based architecture

Large applications can be divided into smaller components.

```txt
App
├── Header
│   ├── Logo
│   ├── SearchBar
│   └── ProfileMenu
├── Sidebar
├── ProductList
│   └── ProductCard
└── Footer
```

## 2.4 One-way data flow

Data normally moves from parent components to child components through props.

```jsx
function Parent() {
  const username = "Navneet";

  return <Child name={username} />;
}

function Child({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

The child should not directly change the parent's data. Instead, the parent can pass a callback to the child.

## 2.5 Efficient DOM updates

React calculates what the UI should look like and commits the necessary changes to the browser DOM. Rendering means React calls components to calculate the UI; committing means React applies the required DOM changes.

---

# 3. React Is a Library, Not a Complete Framework

React mainly handles the UI layer.

A complete React application may also use:

- React Router for routing
- TanStack Query for server-state management
- Redux Toolkit or Zustand for global client state
- Next.js or another framework for routing, server rendering and backend integration
- React Hook Form for complex forms
- Testing Library for component testing

React itself does not force one solution for every application concern.

---

# 4. Prerequisite JavaScript for React

Before mastering React, you should understand these JavaScript concepts.

## 4.1 `let`, `const` and scope

```js
const name = "Navneet";
let score = 10;

score = 20;
```

Use `const` by default. Use `let` when the variable itself must be reassigned.

## 4.2 Functions

```js
function add(a, b) {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
};
```

React function components are JavaScript functions.

## 4.3 Objects

```js
const user = {
  id: 1,
  name: "Navneet",
  age: 23,
};

console.log(user.name);
```

## 4.4 Arrays

```js
const skills = ["HTML", "CSS", "JavaScript"];

skills.map((skill) => {
  console.log(skill);
});
```

## 4.5 Destructuring

```js
const user = {
  name: "Navneet",
  age: 23,
};

const { name, age } = user;
```

Array destructuring:

```js
const values = [10, 20];

const [first, second] = values;
```

`useState` uses array destructuring:

```jsx
const [count, setCount] = useState(0);
```

## 4.6 Spread operator

Objects:

```js
const user = {
  name: "Navneet",
  age: 23,
};

const updatedUser = {
  ...user,
  age: 24,
};
```

Arrays:

```js
const numbers = [1, 2, 3];

const updatedNumbers = [...numbers, 4];
```

## 4.7 Array methods

### `map`

Transforms each element and returns a new array.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);
```

### `filter`

Returns elements that satisfy a condition.

```js
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
```

### `find`

Returns the first matching item.

```js
const users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Navneet" },
];

const user = users.find((user) => user.id === 2);
```

### `reduce`

Reduces an array to one value.

```js
const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => sum + price, 0);
```

## 4.8 Modules

```js
export function add(a, b) {
  return a + b;
}
```

```js
import { add } from "./math.js";
```

Default export:

```jsx
export default function Header() {
  return <header>Header</header>;
}
```

```jsx
import Header from "./Header.jsx";
```

## 4.9 Ternary operator

```js
const message = age >= 18 ? "Adult" : "Minor";
```

## 4.10 Optional chaining

```js
const city = user?.address?.city;
```

## 4.11 Nullish coalescing

```js
const username = user.name ?? "Guest";
```

It uses the right side only when the left side is `null` or `undefined`.

## 4.12 Promises and `async/await`

```js
async function getUsers() {
  try {
    const response = await fetch("/api/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
}
```

---

# 5. Basic React Project Structure

A simple project may look like this:

```txt
src/
├── assets/
├── components/
│   ├── Header.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── HomePage.jsx
│   └── LoginPage.jsx
├── hooks/
├── context/
├── services/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

A basic entry file:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

`createRoot` creates a React root inside a browser DOM node. Server-generated HTML uses `hydrateRoot` instead.

---

# 6. JSX

JSX is a syntax extension that allows us to write HTML-like markup inside JavaScript.

```jsx
const heading = <h1>Hello React</h1>;
```

JSX is not exactly HTML.

It is transformed into JavaScript that creates React elements.

Conceptually:

```jsx
const element = <h1>Hello</h1>;
```

becomes something similar to:

```js
const element = {
  type: "h1",
  props: {
    children: "Hello",
  },
};
```

You normally do not create this object manually.

## 6.1 JSX rules

### Rule 1: Return one parent element

Incorrect:

```jsx
function App() {
  return (
    <h1>Hello</h1>
    <p>Welcome</p>
  );
}
```

Correct:

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}
```

Or use a Fragment:

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
```

### Rule 2: Close all tags

```jsx
<img src="/logo.png" alt="Logo" />
<input type="text" />
```

### Rule 3: Use camelCase attributes

```jsx
<button onClick={handleClick}>Click</button>
```

Not:

```jsx
<button onclick={handleClick}>Click</button>
```

### Rule 4: Use `className`

```jsx
<div className="container">Content</div>
```

### Rule 5: JavaScript expressions go inside `{}`

```jsx
function Profile() {
  const name = "Navneet";
  const age = 23;

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Next year: {age + 1}</p>
    </div>
  );
}
```

Statements cannot be placed directly inside JSX:

```jsx
// Invalid
<h1>{if (isLoggedIn) "Welcome"}</h1>
```

Use a ternary, logical operator or calculate the value before JSX.

---

# 7. React Elements and Components

## React element

A React element describes what should appear in the UI.

```jsx
const element = <h1>Hello</h1>;
```

## React component

A React component is a reusable function that returns React elements.

```jsx
function Welcome() {
  return <h1>Welcome</h1>;
}
```

Use it as:

```jsx
function App() {
  return <Welcome />;
}
```

Component names must start with a capital letter. Lowercase names are interpreted as built-in HTML tags.

---

# 8. Functional Components

Modern React primarily uses function components.

```jsx
function UserCard() {
  return (
    <article>
      <h2>Navneet</h2>
      <p>Frontend Developer</p>
    </article>
  );
}
```

Arrow function version:

```jsx
const UserCard = () => {
  return (
    <article>
      <h2>Navneet</h2>
      <p>Frontend Developer</p>
    </article>
  );
};
```

Both are valid.

---

# 9. Props

Props are inputs passed from a parent component to a child component.

```jsx
function UserCard(props) {
  return (
    <article>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </article>
  );
}

function App() {
  return <UserCard name="Navneet" role="React Developer" />;
}
```

Destructuring props:

```jsx
function UserCard({ name, role }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
    </article>
  );
}
```

## 9.1 Props are read-only

A child should not mutate props.

Incorrect:

```jsx
function User({ user }) {
  user.name = "Changed";
  return <h1>{user.name}</h1>;
}
```

Correct:

```jsx
function User({ user, onRename }) {
  return (
    <button onClick={() => onRename("Changed")}>Rename {user.name}</button>
  );
}
```

## 9.2 Default prop values

```jsx
function Button({ text = "Submit", disabled = false }) {
  return <button disabled={disabled}>{text}</button>;
}
```

## 9.3 Passing different data types

```jsx
<Product
  name="Laptop"
  price={80000}
  inStock={true}
  specifications={{
    ram: "16GB",
    storage: "1TB",
  }}
  tags={["Gaming", "Powerful"]}
  onBuy={handleBuy}
/>
```

## 9.4 The `children` prop

Content placed between a component's opening and closing tags is available through `children`.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Premium Plan</h2>
      <p>₹999 per month</p>
      <button>Purchase</button>
    </Card>
  );
}
```

This is called **composition**.

---

# 10. State

State is component-specific memory.

Use state when a value:

1. Changes over time.
2. Affects what is displayed.
3. Must survive re-renders.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

`useState(0)` returns:

```js
[count, setCount];
```

- `count`: current state value
- `setCount`: function used to request a state update
- `0`: initial state

## 10.1 State versus regular variables

Incorrect:

```jsx
function Counter() {
  let count = 0;

  function increase() {
    count++;
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
    </>
  );
}
```

Changing `count` does not tell React to render again. It is also recreated when the component renders.

Correct:

```jsx
const [count, setCount] = useState(0);
```

---

# 11. State Is a Snapshot

State does not behave like a variable that changes immediately inside the currently executing event handler.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);

    console.log(count);
  }

  return <button onClick={handleClick}>{count}</button>;
}
```

If `count` was `0`, the console usually prints `0`, not `1`.

Why?

The current event handler belongs to the render in which `count` was `0`. Calling `setCount` requests another render; it does not modify that render's snapshot.

---

# 12. State Batching

React can group multiple state updates before re-rendering.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increaseThreeTimes() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={increaseThreeTimes}>{count}</button>;
}
```

This normally increases by only one because all three calls use the same `count` snapshot.

Use functional updates:

```jsx
function increaseThreeTimes() {
  setCount((currentCount) => currentCount + 1);
  setCount((currentCount) => currentCount + 1);
  setCount((currentCount) => currentCount + 1);
}
```

Now each updater receives the result of the previous updater. React queues and processes these updates together.

## Interview rule

Use a functional state update when the next value depends on the previous value.

```jsx
setCount((previousCount) => previousCount + 1);
```

---

# 13. Updating Objects in State

State must be treated as immutable.

Incorrect:

```jsx
const [user, setUser] = useState({
  name: "Navneet",
  age: 23,
});

function updateAge() {
  user.age = 24;
  setUser(user);
}
```

Correct:

```jsx
function updateAge() {
  setUser((previousUser) => ({
    ...previousUser,
    age: 24,
  }));
}
```

React state should be replaced with a new object instead of mutating the existing object. Spread syntax creates a shallow copy.

## Updating a nested object

```jsx
const [user, setUser] = useState({
  name: "Navneet",
  address: {
    city: "Jaipur",
    state: "Rajasthan",
  },
});

function updateCity() {
  setUser((previousUser) => ({
    ...previousUser,
    address: {
      ...previousUser.address,
      city: "Gurugram",
    },
  }));
}
```

---

# 14. Updating Arrays in State

Do not directly use mutating operations on state.

Avoid directly mutating state with:

- `push`
- `pop`
- `shift`
- `unshift`
- `splice`
- `sort`
- `reverse`

## Add an item

```jsx
setUsers((previousUsers) => [...previousUsers, newUser]);
```

## Remove an item

```jsx
setUsers((previousUsers) => previousUsers.filter((user) => user.id !== userId));
```

## Update an item

```jsx
setUsers((previousUsers) =>
  previousUsers.map((user) =>
    user.id === userId ? { ...user, name: "Updated Name" } : user,
  ),
);
```

## Toggle a property

```jsx
setTodos((previousTodos) =>
  previousTodos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  ),
);
```

---

# 15. Events in React

React events use camelCase names.

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked");
  }

  return <button onClick={handleClick}>Click</button>;
}
```

Pass the function:

```jsx
onClick = { handleClick };
```

Do not call it during rendering:

```jsx
onClick={handleClick()}
```

The second version immediately calls the function while rendering.

## Passing arguments

```jsx
function ProductList() {
  function handleDelete(id) {
    console.log("Deleting:", id);
  }

  return <button onClick={() => handleDelete(10)}>Delete</button>;
}
```

## Event object

```jsx
function Input() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input onChange={handleChange} />;
}
```

## Prevent default behaviour

```jsx
function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
}
```

## Stop event propagation

```jsx
function Parent() {
  return (
    <div onClick={() => console.log("Parent clicked")}>
      <button
        onClick={(event) => {
          event.stopPropagation();
          console.log("Button clicked");
        }}
      >
        Click
      </button>
    </div>
  );
}
```

---

# 16. Conditional Rendering

## Using `if`

```jsx
function Dashboard({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return <AdminDashboard />;
}
```

## Ternary operator

```jsx
function Status({ isOnline }) {
  return <p>{isOnline ? "Online" : "Offline"}</p>;
}
```

## Logical AND

```jsx
function Notification({ count }) {
  return <div>{count > 0 && <p>You have {count} messages</p>}</div>;
}
```

Be careful with numbers:

```jsx
{
  count && <p>Messages</p>;
}
```

When `count` is `0`, React may render `0`.

Safer:

```jsx
{
  count > 0 && <p>Messages</p>;
}
```

## Return `null`

```jsx
function Warning({ show }) {
  if (!show) {
    return null;
  }

  return <p>Warning!</p>;
}
```

---

# 17. Rendering Lists

```jsx
function UserList() {
  const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Navneet" },
    { id: 3, name: "Riya" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Why is `key` required?

A key helps React identify which list item corresponds to which data item.

This matters when items are:

- Added
- Removed
- Reordered
- Updated

## Good key

```jsx
key={user.id}
```

## Weak key

```jsx
key = { index };
```

Index keys can cause bugs when list items are inserted, deleted or reordered because component state may become associated with the wrong item.

Index may be acceptable when:

- The list is static.
- Items are never reordered.
- Items are never added or removed.
- Items have no stable IDs.

## Keys are not passed as normal props

```jsx
<UserCard key={user.id} userId={user.id} />
```

Inside `UserCard`, use `userId`, not `key`.

---

# 18. Forms

## 18.1 Controlled component

React state controls the input value.

```jsx
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <button>Login</button>
    </form>
  );
}
```

Data flow:

```txt
Input event
   ↓
onChange
   ↓
setEmail
   ↓
Component re-renders
   ↓
value={email}
```

## 18.2 Multiple fields

```jsx
function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />

      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button>Register</button>
    </form>
  );
}
```

Computed property:

```js
[name]: value
```

If `name` is `"email"`, it updates the `email` property.

## 18.3 Checkbox

```jsx
const [accepted, setAccepted] = useState(false);

<input
  type="checkbox"
  checked={accepted}
  onChange={(event) => setAccepted(event.target.checked)}
/>;
```

## 18.4 Select

```jsx
const [country, setCountry] = useState("India");

<select value={country} onChange={(event) => setCountry(event.target.value)}>
  <option value="India">India</option>
  <option value="Japan">Japan</option>
  <option value="Germany">Germany</option>
</select>;
```

## 18.5 Uncontrolled input

The DOM stores the current value.

```jsx
import { useRef } from "react";

function SearchForm() {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button>Search</button>
    </form>
  );
}
```

Controlled inputs are usually easier for:

- Validation
- Conditional UI
- Character counters
- Dependent fields
- Disabling buttons
- Formatting values

Uncontrolled inputs can be useful for:

- Simple forms
- File inputs
- Integration with non-React code
- Reducing state updates in large forms

---

# 19. Lifting State Up

When multiple components need the same state, move it to their closest common parent.

```jsx
import { useState } from "react";

function TemperatureInput({ label, temperature, onTemperatureChange }) {
  return (
    <label>
      {label}

      <input
        value={temperature}
        onChange={(event) => onTemperatureChange(event.target.value)}
      />
    </label>
  );
}

function App() {
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <TemperatureInput
        label="Temperature"
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />

      <p>Current value: {temperature}</p>
    </div>
  );
}
```

The parent owns the state.

The child receives:

- The value
- A function for requesting changes

Lifting state up creates a single source of truth.

---

# 20. Choosing a Good State Structure

Good state design prevents many bugs.

## Principle 1: Group related state

Good:

```jsx
const [position, setPosition] = useState({
  x: 0,
  y: 0,
});
```

Instead of:

```jsx
const [x, setX] = useState(0);
const [y, setY] = useState(0);
```

Separate state may still be better if the values change independently.

## Principle 2: Avoid contradictory state

Poor:

```jsx
const [isLoading, setIsLoading] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);
```

These could accidentally all become `true`.

Better:

```jsx
const [status, setStatus] = useState("idle");
```

Possible values:

```txt
idle
loading
success
error
```

## Principle 3: Avoid redundant state

Poor:

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [fullName, setFullName] = useState("");
```

Better:

```jsx
const fullName = `${firstName} ${lastName}`;
```

`fullName` can be calculated during rendering.

## Principle 4: Avoid duplicated state

Poor:

```jsx
const [products, setProducts] = useState(initialProducts);
const [selectedProduct, setSelectedProduct] = useState(initialProducts[0]);
```

If a product changes in `products`, `selectedProduct` may contain an outdated copy.

Better:

```jsx
const [selectedProductId, setSelectedProductId] = useState(
  initialProducts[0].id,
);

const selectedProduct = products.find(
  (product) => product.id === selectedProductId,
);
```

## Principle 5: Avoid deeply nested state when possible

Deep updates become difficult.

React's official guidance emphasizes avoiding redundant, duplicate and contradictory state.

---

# 21. Preserving and Resetting State

React associates state with a component's position in the UI tree.

```jsx
function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && <Counter />}

      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
}
```

When `Counter` is removed, its state is destroyed. When added again, it starts with its initial state.

## Resetting state with a key

```jsx
function UserProfile({ userId }) {
  return <ProfileForm key={userId} userId={userId} />;
}
```

When `userId` changes, the key changes, so React treats it as a different component and resets its state.

State preservation depends on component type, position and keys.

---

# 22. Hooks

Hooks allow function components to use React features such as:

- State
- Effects
- Context
- Refs
- Reducers
- Transitions

## Rules of Hooks

### Rule 1: Call Hooks at the top level

Incorrect:

```jsx
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
```

Incorrect:

```jsx
for (let i = 0; i < 5; i++) {
  useEffect(() => {});
}
```

Correct:

```jsx
const [user, setUser] = useState(null);

if (!isLoggedIn) {
  return <Login />;
}
```

### Rule 2: Call Hooks only from:

- React function components
- Custom Hooks

Do not call Hooks from regular utility functions.

React relies on a consistent Hook call order between renders.

---

# 23. `useState`

Syntax:

```jsx
const [state, setState] = useState(initialState);
```

## Lazy initialization

Poor for expensive initialization:

```jsx
const [data, setData] = useState(createLargeData());
```

`createLargeData()` is called during every render, although its result is used only initially.

Better:

```jsx
const [data, setData] = useState(() => createLargeData());
```

React calls the initializer when the state is initialized.

## Store a function in state

Incorrect:

```jsx
const [callback, setCallback] = useState(myFunction);
```

React may interpret `myFunction` as an initializer.

Use:

```jsx
const [callback, setCallback] = useState(() => myFunction);
```

To update it:

```jsx
setCallback(() => newFunction);
```

---

# 24. `useEffect`

`useEffect` synchronizes a component with something outside React.

Examples of external systems:

- Network connections
- Browser APIs
- Event listeners
- Timers
- Third-party widgets
- Subscriptions
- Analytics systems

It should not be treated as a general tool for every calculation.

Syntax:

```jsx
useEffect(setup, dependencies);
```

## 24.1 Effect after every commit

```jsx
useEffect(() => {
  console.log("Effect executed");
});
```

Without a dependency array, it runs after every relevant commit.

## 24.2 Effect after initial mount

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

## 24.3 Effect when dependencies change

```jsx
useEffect(() => {
  console.log("User changed:", userId);
}, [userId]);
```

## 24.4 Cleanup function

```jsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []);
```

Cleanup runs before React re-runs the Effect with changed dependencies and when the component is removed.

## 24.5 Window event listener

```jsx
useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

The same function reference must be used when removing the listener.

## 24.6 Fetching data

```jsx
import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        setStatus("loading");
        setError(null);

        const response = await fetch(`/api/users/${userId}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to fetch user");
        }

        const userData = await response.json();

        setUser(userData);
        setStatus("success");
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message);
          setStatus("error");
        }
      }
    }

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [userId]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  return <h1>{user.name}</h1>;
}
```

The cleanup cancels the previous request when `userId` changes or the component unmounts.

For production applications, a server-state library or framework data-loading API often provides caching, deduplication and request lifecycle management.

---

# 25. Effect Dependency Array

React compares each dependency using `Object.is`.

```jsx
useEffect(() => {
  connect(roomId);
}, [roomId]);
```

All reactive values read by an Effect should generally appear in its dependency list.

Reactive values include:

- Props
- State
- Variables created inside the component
- Functions created inside the component

The React Hooks linter checks Effect dependencies. Missing dependencies can produce stale data; unnecessary unstable dependencies can make the Effect run too frequently.

## Object dependency problem

```jsx
function Chat({ roomId }) {
  const options = {
    serverUrl: "https://example.com",
    roomId,
  };

  useEffect(() => {
    connect(options);
  }, [options]);
}
```

`options` is a new object on every render, so the Effect runs again.

Better:

```jsx
function Chat({ roomId }) {
  useEffect(() => {
    const options = {
      serverUrl: "https://example.com",
      roomId,
    };

    connect(options);
  }, [roomId]);
}
```

---

# 26. Infinite Effect Loop

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return <p>{count}</p>;
}
```

Sequence:

1. Component renders.
2. Effect runs.
3. Effect updates `count`.
4. Component renders again.
5. Dependency changed.
6. Effect runs again.
7. Loop continues.

Before setting state in an Effect, ask:

> Am I synchronizing with an external system, or am I creating derived state unnecessarily?

---

# 27. You Might Not Need an Effect

## Bad: derive state using an Effect

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [fullName, setFullName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

Better:

```jsx
const fullName = `${firstName} ${lastName}`;
```

## Bad: reset state through an Effect

```jsx
useEffect(() => {
  setComment("");
}, [userId]);
```

Potentially better:

```jsx
<CommentForm key={userId} />
```

## Bad: handle a button action through an Effect

```jsx
useEffect(() => {
  if (shouldPurchase) {
    purchaseProduct();
  }
}, [shouldPurchase]);
```

Better:

```jsx
function handlePurchase() {
  purchaseProduct();
}
```

Effects are escape hatches for synchronization with external systems. If no external system is involved, you often do not need an Effect.

---

# 28. Stale Closures

A closure remembers variables from the render in which it was created.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <p>{count}</p>;
}
```

The interval callback remembers the initial `count`, usually `0`.

It repeatedly requests:

```js
setCount(0 + 1);
```

Fix with a functional update:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount((currentCount) => currentCount + 1);
  }, 1000);

  return () => clearInterval(id);
}, []);
```

---

# 29. `useEffectEvent`

React 19.2 includes `useEffectEvent` for Effect logic that should read the latest committed props or state without causing the Effect itself to resynchronize. It must be called from an Effect or another Effect Event, and it should not be used merely to hide real dependencies.

```jsx
import { useEffect, useEffectEvent } from "react";

function ChatRoom({ roomId, muted }) {
  const onConnected = useEffectEvent(() => {
    if (!muted) {
      console.log("Connected to", roomId);
    }
  });

  useEffect(() => {
    const connection = createConnection(roomId);

    connection.on("connected", onConnected);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return <p>Room: {roomId}</p>;
}
```

Changing `muted` does not reconnect the room, but `onConnected` sees the latest `muted` value.

Do not use `useEffectEvent` in a click handler:

```jsx
// Incorrect
<button onClick={onConnected}>Test</button>
```

It is specifically designed for Effect-local events.

---

# 30. `useRef`

`useRef` stores a mutable value that survives re-renders but does not trigger a render when changed. It is frequently used for DOM access.

```jsx
const ref = useRef(initialValue);
```

It returns:

```js
{
  current: initialValue;
}
```

## 30.1 Access a DOM element

```jsx
import { useRef } from "react";

function Form() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} />

      <button onClick={focusInput}>Focus input</button>
    </>
  );
}
```

## 30.2 Store an interval ID

```jsx
function Timer() {
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      console.log("Running");
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}
```

## State versus ref

Use state when changing the value should update the UI.

Use a ref when:

- The value should survive re-renders.
- Changing it should not render the component.
- You need access to a DOM node.
- You need to store an external object or timer ID.

---

# 31. `useReducer`

`useReducer` manages state using a reducer function.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Example:

```jsx
import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "increaseBy":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "reset":
      return initialState;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>

      <button
        onClick={() =>
          dispatch({
            type: "increaseBy",
            payload: 5,
          })
        }
      >
        Increase by 5
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
```

A reducer receives:

```js
function reducer(currentState, action) {
  return nextState;
}
```

Reducers should be pure:

- Do not mutate state.
- Do not make API requests.
- Do not call random side effects.
- Return a new state.

## `useState` versus `useReducer`

Use `useState` when:

- State is simple.
- Updates are straightforward.
- There are only a few related values.

Use `useReducer` when:

- State transitions are complex.
- Many event handlers update the same state.
- State has multiple related fields.
- You want update logic centralized and testable.

`useReducer` is similar to `useState`, but moves update logic into a reducer function.

---

# 32. Context API

Context lets distant components read shared data without passing props manually through every intermediate level.

Common uses:

- Theme
- Authenticated user
- Language
- Feature flags
- Application configuration

## 32.1 Create context

```jsx
import { createContext } from "react";

export const ThemeContext = createContext(null);
```

## 32.2 Provide a value

In modern React:

```jsx
function App() {
  const theme = "dark";

  return (
    <ThemeContext value={theme}>
      <Dashboard />
    </ThemeContext>
  );
}
```

Older and widely used syntax:

```jsx
<ThemeContext.Provider value={theme}>
  <Dashboard />
</ThemeContext.Provider>
```

## 32.3 Read context

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const theme = useContext(ThemeContext);

  return <button className={theme}>Submit</button>;
}
```

`useContext` reads and subscribes to a context value.

## Complete authentication example

```jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(userData) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated: user !== null,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}

function Profile() {
  const { user, login, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <button
        onClick={() =>
          login({
            id: 1,
            name: "Navneet",
          })
        }
      >
        Login
      </button>
    );
  }

  return (
    <>
      <h1>{user.name}</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Profile />
    </AuthProvider>
  );
}
```

## Context performance issue

When a provider's value changes, context consumers can re-render.

```jsx
const value = {
  user,
  login,
  logout,
};
```

This object is newly created on every provider render.

Possible improvements:

- Split unrelated contexts.
- Keep provider state as local as practical.
- Memoize provider values only when profiling shows a benefit.
- Use external state management for highly dynamic, large shared state.

Do not put every piece of application state in Context.

---

# 33. Custom Hooks

A custom Hook is a function whose name starts with `use` and which can call other Hooks.

Example:

```jsx
import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);

      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
```

Usage:

```jsx
function Status() {
  const isOnline = useOnlineStatus();

  return <p>{isOnline ? "Online" : "Offline"}</p>;
}
```

Custom Hooks share logic, not a single state instance. Each Hook call has independent state.

## Custom fetching Hook

```jsx
import { useEffect, useState } from "react";

function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    status: "loading",
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      setState({
        data: null,
        status: "loading",
        error: null,
      });

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();

        setState({
          data,
          status: "success",
          error: null,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          setState({
            data: null,
            status: "error",
            error: error.message,
          });
        }
      }
    }

    loadData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
}
```

Usage:

```jsx
function Users() {
  const { data: users, status, error } = useFetch("/api/users");

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

In larger production apps, a dedicated server-state solution may offer stronger caching and synchronization.

---

# 34. Re-rendering

A component can render because:

1. It is rendered for the first time.
2. Its state changes.
3. Its parent renders.
4. A context it reads changes.
5. An external store subscription changes.
6. A Suspense boundary retries it.

## Important interview correction

> React does not automatically re-render a child only because its props changed.

More precisely:

- A parent render normally causes React to call its child components.
- The child receives the latest props.
- Memoization can allow React to skip calling some children when their props are unchanged.
- State and context can still make a memoized component render.

---

# 35. Render Phase and Commit Phase

## Render phase

React calls components and calculates the next UI.

```jsx
function Product({ product }) {
  return <h2>{product.name}</h2>;
}
```

Component rendering should be pure.

Do not do this during rendering:

```jsx
function BadComponent() {
  localStorage.setItem("visited", "true");
  document.title = "Page";
  fetch("/api/analytics");

  return <h1>Hello</h1>;
}
```

These are side effects.

## Commit phase

React applies the calculated changes to the DOM.

After the commit:

- Layout Effects run before painting.
- The browser paints.
- Normal Effects generally run afterward.

React can call rendering logic without necessarily committing every attempted render, so rendering must remain pure.

---

# 36. Pure Components

A pure component:

- Returns the same output for the same props, state and context.
- Does not mutate external variables during rendering.
- Does not perform side effects during rendering.

Bad:

```jsx
let total = 0;

function Product({ price }) {
  total += price;

  return <p>{price}</p>;
}
```

The output now depends on how many times React called the component.

Good:

```jsx
function Product({ price }) {
  const tax = price * 0.18;

  return <p>{price + tax}</p>;
}
```

---

# 37. Strict Mode

```jsx
import { StrictMode } from "react";

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Strict Mode adds development-only checks that help reveal:

- Impure rendering
- Missing Effect cleanup
- Deprecated APIs
- Ref callback cleanup problems

Some functions may appear to execute more than once in development. This is deliberate diagnostic behaviour and does not happen the same way in production.

Example revealing missing cleanup:

```jsx
useEffect(() => {
  const connection = connect();

  return () => {
    connection.disconnect();
  };
}, []);
```

Your code should remain correct across setup-cleanup-setup cycles.

---

# 38. Reconciliation

Reconciliation is the process React uses to compare the previous element tree with the next element tree and determine what must change.

High-level rules:

## Same element type

```jsx
<div className="old" />
```

to:

```jsx
<div className="new" />
```

React can update the existing DOM element's attributes.

## Different element type

```jsx
<div />
```

to:

```jsx
section />
```

React replaces that part of the tree.

## Same component type

```jsx
<User id={1} />
```

to:

```jsx
<User id={2} />
```

React generally preserves the component instance's state because its type and position remain the same.

## Different key

```jsx
<User key="user-1" />
```

to:

```jsx
<User key="user-2" />
```

React treats it as a different component and resets state.

---

# 39. Virtual DOM

The term Virtual DOM commonly refers to React's in-memory representation of the desired UI.

Simplified process:

1. State changes.
2. React calls components.
3. A new element tree is produced.
4. React compares it with the previous tree.
5. React commits necessary host-environment changes.

Important interview answer:

> The Virtual DOM is not automatically faster than every possible manual DOM implementation. Its major benefit is giving developers a declarative programming model while React coordinates UI updates efficiently.

---

# 40. `React.memo`

`memo` can let React skip rendering a component when its props are unchanged.

```jsx
import { memo } from "react";

const UserCard = memo(function UserCard({ name }) {
  console.log("UserCard rendered");

  return <h2>{name}</h2>;
});
```

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((value) => value + 1)}>{count}</button>

      <UserCard name="Navneet" />
    </>
  );
}
```

When `App` renders, React may skip `UserCard` because its `name` prop is unchanged.

## `memo` is not a guarantee

A memoized component can still render when:

- Its own state changes.
- Context it reads changes.
- Its props change.
- React needs to render it for another reason.

Memoization is a performance optimization, not a semantic guarantee. React Compiler can automatically apply equivalent component memoization, reducing the need for manual `memo`.

---

# 41. `useMemo`

`useMemo` caches the result of a calculation between renders.

```jsx
const cachedValue = useMemo(calculateValue, dependencies);
```

Example:

```jsx
import { useMemo, useState } from "react";

function ProductList({ products }) {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    console.log("Filtering products");

    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [products, query]);

  return (
    <>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />

      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
}
```

Use `useMemo` when:

- A calculation is measurably expensive.
- Dependencies change less frequently than unrelated state.
- You need stable object identity for a memoized child or Hook dependency.

Do not use it for every simple expression.

Poor:

```jsx
const total = useMemo(() => price * quantity, [price, quantity]);
```

Usually better:

```jsx
const total = price * quantity;
```

`useMemo` caches a calculation result; it should not be used for correctness.

---

# 42. `useCallback`

`useCallback` caches a function definition between renders.

```jsx
const cachedFunction = useCallback(functionDefinition, dependencies);
```

Example:

```jsx
import { memo, useCallback, useState } from "react";

const SearchButton = memo(function SearchButton({ onSearch }) {
  console.log("SearchButton rendered");

  return <button onClick={onSearch}>Search</button>;
});

function App() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const handleSearch = useCallback(() => {
    console.log("Searching for:", query);
  }, [query]);

  return (
    <>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />

      <button onClick={() => setCount((value) => value + 1)}>
        Count: {count}
      </button>

      <SearchButton onSearch={handleSearch} />
    </>
  );
}
```

Without `useCallback`, `handleSearch` would be a new function on every render, making `SearchButton`'s prop different by identity.

Use `useCallback` when:

- Passing a callback to an effectively memoized child.
- A callback is a dependency of another Hook.
- Profiling shows function identity is creating meaningful work.

Do not use it around every function. `useCallback` itself has cost and complexity.

## `useMemo` versus `useCallback`

```jsx
useMemo(() => value, dependencies);
```

Caches a returned value.

```jsx
useCallback(callback, dependencies);
```

Caches the function itself.

Conceptually:

```jsx
useCallback(callback, dependencies);
```

is similar to:

```jsx
useMemo(() => callback, dependencies);
```

---

# 43. Referential Equality

Objects and functions are compared by reference.

```js
{} === {}; // false
[] === []; // false
(() => {}) === (() => {}); // false
```

Primitives are compared by value:

```js
"hello" === "hello"; // true
10 === 10; // true
```

This matters for:

- Effect dependencies
- `React.memo`
- `useMemo`
- `useCallback`
- Context values

```jsx
const options = {
  sort: "ascending",
};
```

A new object is created during every render.

---

# 44. React Compiler

React Compiler is a build-time optimization system that automatically memoizes component work and values when code follows React's rules. This can reduce the need for manual `React.memo`, `useMemo` and `useCallback`.

Important interview points:

1. The compiler does not remove the need to understand rendering.
2. Components and Hooks must remain pure.
3. Correct state structure is still important.
4. Avoid manual memoization unless it is necessary or measured.
5. Existing codebases may not all use the compiler yet.

---

# 45. `useTransition`

`useTransition` marks some updates as non-blocking.

```jsx
const [isPending, startTransition] = useTransition();
```

Example:

```jsx
import { useState, useTransition } from "react";

function SearchPage({ products }) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const nextValue = event.target.value;

    setInput(nextValue);

    startTransition(() => {
      setQuery(nextValue);
    });
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <input value={input} onChange={handleChange} />

      {isPending && <p>Updating results...</p>}

      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
}
```

The input update remains urgent. The potentially expensive results update becomes a Transition.

Do not use a Transition to control the text input itself:

```jsx
// Poor
startTransition(() => {
  setInput(event.target.value);
});
```

Text inputs should update immediately.

React 19 allows async functions inside Transitions as Actions, helping coordinate pending states and async work.

---

# 46. `useDeferredValue`

`useDeferredValue` returns a deferred version of a value.

```jsx
const deferredValue = useDeferredValue(value);
```

Example:

```jsx
import { useDeferredValue, useState } from "react";

function SearchPage({ products }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const isStale = query !== deferredQuery;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(deferredQuery.toLowerCase()),
  );

  return (
    <>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />

      <div
        style={{
          opacity: isStale ? 0.5 : 1,
        }}
      >
        {filteredProducts.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </>
  );
}
```

Difference:

- `useTransition` is useful when you control the state update.
- `useDeferredValue` is useful when you receive a value and want a slower part of the UI to lag behind it.

It does not create a fixed delay like debouncing. It allows React to prioritize more urgent work.

---

# 47. Debouncing Versus Deferred Rendering

## Debouncing

Waits for a fixed period before performing work.

```jsx
function useDebouncedValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

Useful for reducing:

- API requests
- Analytics events
- Search submissions

## Deferred value

Does not necessarily wait a fixed duration. It lets React delay non-urgent rendering when urgent work is happening.

Use debounce to reduce how frequently an external action happens.

Use deferred rendering to keep rendering responsive.

---

# 48. `lazy` and `Suspense`

`lazy` loads component code only when it is needed.

```jsx
import { lazy, Suspense } from "react";

const AdminDashboard = lazy(() => import("./AdminDashboard.jsx"));

function App() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <AdminDashboard />
    </Suspense>
  );
}
```

The dynamically imported module should provide the component as its default export.

`lazy` suspends while component code is loading, and the nearest Suspense boundary displays its fallback.

## Route-level code splitting

```jsx
const HomePage = lazy(() => import("./pages/HomePage"));

const ProductPage = lazy(() => import("./pages/ProductPage"));
```

This can reduce the amount of JavaScript needed for the initial page.

## Important Suspense point

Suspense does not automatically make arbitrary data fetching inside `useEffect` suspend.

```jsx
useEffect(() => {
  fetchData();
}, []);
```

This does not integrate with Suspense by itself.

Suspense-aware data fetching normally requires:

- A compatible framework
- A compatible data source
- Reading a cached Promise through supported mechanisms

---

# 49. The `use` API

React's `use` API can read a Promise or context.

When reading a pending Promise, the component suspends and the nearest Suspense boundary displays its fallback.

```jsx
import { Suspense, use } from "react";

function UserDetails({ userPromise }) {
  const user = use(userPromise);

  return <h1>{user.name}</h1>;
}

function App({ userPromise }) {
  return (
    <Suspense fallback={<p>Loading user...</p>}>
      <UserDetails userPromise={userPromise} />
    </Suspense>
  );
}
```

A major difference from most Hooks is that `use` can be called conditionally.

```jsx
function Message({ shouldRead, messagePromise }) {
  if (shouldRead) {
    const message = use(messagePromise);

    return <p>{message}</p>;
  }

  return <p>Message hidden</p>;
}
```

Do not create a new Promise on every client render:

```jsx
// Problematic
const user = use(fetch("/api/user"));
```

The Promise should generally come from a framework, cache, server component or stable external source.

`use` can also read context and, unlike `useContext`, may be called inside conditions.

---

# 50. Error Boundaries

An Error Boundary catches rendering errors in its descendant component tree and displays fallback UI.

React still uses class components for built-in Error Boundary lifecycle APIs.

```jsx
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("Captured error:", error);
    console.error("Component stack:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <button
            onClick={() =>
              this.setState({
                hasError: false,
              })
            }
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

Usage:

```jsx
<ErrorBoundary>
  <ProductPage />
</ErrorBoundary>
```

Error Boundaries catch errors during:

- Rendering
- Constructors
- Lifecycle methods of descendants

They generally do not catch errors in:

- Event handlers
- Arbitrary asynchronous callbacks
- Server-side rendering
- The Error Boundary itself

Use normal `try/catch` inside event handlers:

```jsx
async function handleSubmit() {
  try {
    await saveData();
  } catch (error) {
    setError(error.message);
  }
}
```

There is not yet a direct built-in function-component equivalent for the Error Boundary class methods.

---

# 51. Portals

A portal renders JSX into a different DOM node while preserving its position in the React tree.

```jsx
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}

        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}
```

HTML:

```html
<div id="root"></div>
<div id="modal-root"></div>
```

Useful for:

- Modals
- Tooltips
- Dropdown menus
- Toast notifications

Even though portal DOM appears elsewhere, React-tree behaviour such as context and event propagation follows the React tree.

---

# 52. Refs in React 19

React 19 allows function components to receive `ref` as a prop.

```jsx
function CustomInput({ label, ref, ...props }) {
  return (
    <label>
      {label}
      <input ref={ref} {...props} />
    </label>
  );
}
```

Usage:

```jsx
function Form() {
  const inputRef = useRef(null);

  return (
    <>
      <CustomInput ref={inputRef} label="Name" />

      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </>
  );
}
```

In React 19, `forwardRef` is no longer necessary for this case. Existing code still frequently uses it, so you should understand it for interviews and older projects.

Older pattern:

```jsx
import { forwardRef } from "react";

const CustomInput = forwardRef(function CustomInput(props, ref) {
  return <input ref={ref} {...props} />;
});
```

---

# 53. `useImperativeHandle`

This Hook customizes what a parent receives through a ref.

```jsx
import { useImperativeHandle, useRef } from "react";

function CustomInput({ ref }) {
  const internalInputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      focus() {
        internalInputRef.current?.focus();
      },

      clear() {
        if (internalInputRef.current) {
          internalInputRef.current.value = "";
        }
      },
    }),
    [],
  );

  return <input ref={internalInputRef} />;
}
```

Parent:

```jsx
function Form() {
  const inputRef = useRef(null);

  return (
    <>
      <CustomInput ref={inputRef} />

      <button onClick={() => inputRef.current?.focus()}>Focus</button>

      <button onClick={() => inputRef.current?.clear()}>Clear</button>
    </>
  );
}
```

Prefer declarative props when possible. Imperative handles are mainly useful for low-level controls where the parent genuinely needs commands such as `focus`, `scrollTo` or `play`.

---

# 54. `useLayoutEffect`

`useLayoutEffect` is similar to `useEffect`, but runs before the browser repaints.

```jsx
import { useLayoutEffect, useRef, useState } from "react";

function Tooltip() {
  const tooltipRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const rectangle = tooltipRef.current.getBoundingClientRect();

    setHeight(rectangle.height);
  }, []);

  return <div ref={tooltipRef}>Tooltip height: {height}</div>;
}
```

Use it for:

- Measuring layout
- Adjusting position before paint
- Avoiding a visible layout flicker

Prefer `useEffect` when possible because `useLayoutEffect` can block painting and hurt performance.

---

# 55. `useId`

`useId` creates IDs useful for accessibility relationships.

```jsx
import { useId } from "react";

function PasswordField() {
  const passwordId = useId();
  const helpId = useId();

  return (
    <div>
      <label htmlFor={passwordId}>Password</label>

      <input id={passwordId} type="password" aria-describedby={helpId} />

      <p id={helpId}>Use at least eight characters.</p>
    </div>
  );
}
```

Do not use `useId` to create list keys.

Incorrect:

```jsx
items.map((item) => <li key={useId()}>{item.name}</li>);
```

List keys should come from the data.

`useId` is intended primarily for accessibility IDs and stable client/server ID coordination.

---

# 56. `useSyncExternalStore`

This Hook subscribes safely to data held outside React.

```jsx
const snapshot = useSyncExternalStore(
  subscribe,
  getSnapshot,
  getServerSnapshot,
);
```

Online status example:

```jsx
import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);

    window.removeEventListener("offline", callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true;
}

function OnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return <p>{isOnline ? "Online" : "Offline"}</p>;
}
```

It is mainly useful for:

- External state libraries
- Browser APIs
- Legacy stores
- Subscriptions that live outside React

It helps React read a consistent snapshot from an external store.

---

# 57. `useInsertionEffect`

`useInsertionEffect` is mainly intended for CSS-in-JS library authors who must insert styles before layout Effects run.

Application developers should almost always use:

- `useEffect`
- `useLayoutEffect`

Do not use `useInsertionEffect` for normal application side effects.

---

# 58. React 19 Actions

An Action represents an update that may include asynchronous work.

```jsx
import { useState, useTransition } from "react";

function UpdateProfile() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit() {
    startTransition(async () => {
      const result = await updateProfile(name);

      setMessage(result.message);
    });
  }

  return (
    <>
      <input value={name} onChange={(event) => setName(event.target.value)} />

      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Saving..." : "Save"}
      </button>

      <p>{message}</p>
    </>
  );
}
```

Actions help coordinate:

- Pending states
- Async transitions
- Form submissions
- Error propagation
- Optimistic updates

---

# 59. `useActionState`

`useActionState` manages state associated with an Action.

```jsx
import { useActionState } from "react";

async function registerUser(previousState, formData) {
  const email = formData.get("email");

  if (!email) {
    return {
      success: false,
      message: "Email is required",
    };
  }

  await saveUser({ email });

  return {
    success: true,
    message: "Registration successful",
  };
}

function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerUser, {
    success: false,
    message: "",
  });

  return (
    <form action={formAction}>
      <input name="email" type="email" />

      <button disabled={isPending}>
        {isPending ? "Registering..." : "Register"}
      </button>

      <p>{state.message}</p>
    </form>
  );
}
```

Returned values:

```js
[state, dispatchAction, isPending];
```

The action function receives the previous state as its first argument.

---

# 60. `useFormStatus`

`useFormStatus` reads the status of the nearest parent form submission.

It must be used in a descendant component of the form.

```jsx
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
}
```

```jsx
function ContactForm() {
  async function submitForm(formData) {
    await sendMessage({
      name: formData.get("name"),
      message: formData.get("message"),
    });
  }

  return (
    <form action={submitForm}>
      <input name="name" />
      <textarea name="message" />
      <SubmitButton />
    </form>
  );
}
```

This would not work as intended if `useFormStatus` were called in `ContactForm` itself because that component creates the form rather than being its descendant.

`useFormStatus` provides fields such as `pending`, `data`, `method` and `action`.

---

# 61. `useOptimistic`

`useOptimistic` shows an expected result immediately while an asynchronous operation is pending.

```jsx
import { startTransition, useOptimistic, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, temporaryComment) => [
      ...currentComments,
      temporaryComment,
    ],
  );

  async function addComment(formData) {
    const text = formData.get("comment");

    const temporaryComment = {
      id: crypto.randomUUID(),
      text,
      sending: true,
    };

    addOptimisticComment(temporaryComment);

    const savedComment = await saveCommentToServer(text);

    setComments((currentComments) => [...currentComments, savedComment]);
  }

  return (
    <>
      <form action={addComment}>
        <input name="comment" />
        <button>Add comment</button>
      </form>

      <ul>
        {optimisticComments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            {comment.sending && " — Sending..."}
          </li>
        ))}
      </ul>
    </>
  );
}
```

Production code should also handle:

- Request failure
- Retry
- Duplicate submissions
- Stable temporary IDs
- Reconciliation between temporary and server data

`useOptimistic` is specifically designed for optimistic UI updates.

---

# 62. `<Activity>`

React 19.2 includes the `<Activity>` component for hiding UI while preserving its state.

```jsx
import { Activity, useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <button onClick={() => setShowSidebar((show) => !show)}>
        Toggle sidebar
      </button>

      <Activity mode={showSidebar ? "visible" : "hidden"}>
        <Sidebar />
      </Activity>
    </>
  );
}
```

When hidden:

- Its UI is hidden.
- Effects are cleaned up.
- Its state is preserved.
- Hidden updates can be processed at lower priority.

When visible again:

- Previous state is restored.
- Effects are recreated.

This differs from normal conditional rendering, which unmounts the component and destroys its local state.

---

# 63. Server-Side Rendering, Hydration and Server Components

These concepts are related but different.

## Client-side rendering

The browser downloads JavaScript and React builds the UI.

```txt
Browser receives basic HTML
        ↓
JavaScript loads
        ↓
React renders the UI
```

## Server-side rendering

The server generates HTML for a request.

```txt
Request
  ↓
Server renders React to HTML
  ↓
Browser displays HTML
  ↓
JavaScript hydrates it
```

## Hydration

Hydration attaches React behaviour and event handlers to server-generated HTML.

```jsx
import { hydrateRoot } from "react-dom/client";

hydrateRoot(document.getElementById("root"), <App />);
```

The server-generated HTML and the initial client render should match.

## React Server Components

Server Components execute in a server-oriented build environment rather than being shipped as normal client component JavaScript.

They can:

- Access server-side resources
- Read from databases
- Read server files
- Reduce client JavaScript
- Pass serializable data to Client Components

They cannot directly use client-only features such as:

- `useState`
- Browser event handlers
- Browser DOM APIs

Example in a compatible framework:

```jsx
async function ProductPage({ productId }) {
  const product = await database.product.findUnique({
    where: {
      id: productId,
    },
  });

  return (
    <main>
      <h1>{product.name}</h1>
      <AddToCartButton productId={product.id} />
    </main>
  );
}
```

Client component:

```jsx
"use client";

import { useState } from "react";

function AddToCartButton({ productId }) {
  const [added, setAdded] = useState(false);

  return (
    <button onClick={() => setAdded(true)}>
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
```

Server Components are different from SSR:

- SSR describes when HTML is generated.
- Server Components describe where component code executes and what gets included in the client bundle.
- A framework can combine Server Components, SSR, static generation and client components.

Server Components render in a separate server environment and can run at build time or per request.

---

# 64. Server Functions

Server Functions allow Client Components to call functions that execute on the server in a compatible React framework.

```jsx
"use server";

export async function createTodo(formData) {
  const title = formData.get("title");

  await database.todo.create({
    data: {
      title,
    },
  });
}
```

Client component:

```jsx
"use client";

import { createTodo } from "./actions";

function TodoForm() {
  return (
    <form action={createTodo}>
      <input name="title" />
      <button>Add todo</button>
    </form>
  );
}
```

Security rule:

> A Server Function is still a server API endpoint. Validate authentication, authorization and input inside the function.

Never assume that because a function is called from your UI, the caller is trustworthy.

React 19 stabilizes the Server Function programming model, although framework and bundler implementation details may vary.

---

# 65. Class Components

Function components are preferred for new code, but interviews and older projects may contain classes.

```jsx
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrease = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <p>{this.state.count}</p>

        <button onClick={this.handleIncrease}>Increase</button>
      </>
    );
  }
}
```

## Class props

```jsx
class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Class lifecycle methods

### Mounting

```jsx
componentDidMount() {}
```

Called after the component is added to the DOM.

### Updating

```jsx
componentDidUpdate(previousProps, previousState) {}
```

Called after an update is committed.

### Unmounting

```jsx
componentWillUnmount() {}
```

Used for cleanup.

## Lifecycle to Hook comparison

Class:

```jsx
componentDidMount() {
  subscribe(this.props.userId);
}

componentDidUpdate(previousProps) {
  if (previousProps.userId !== this.props.userId) {
    unsubscribe(previousProps.userId);
    subscribe(this.props.userId);
  }
}

componentWillUnmount() {
  unsubscribe(this.props.userId);
}
```

Function:

```jsx
useEffect(() => {
  subscribe(userId);

  return () => {
    unsubscribe(userId);
  };
}, [userId]);
```

An Effect does not exactly mean “these three lifecycle methods combined.” A better mental model is:

> Synchronize this component with an external system for the current dependency values.

---

# 66. Controlled Versus Uncontrolled Components

This idea applies beyond form inputs.

## Controlled component

A parent controls important behaviour through props.

```jsx
function AccordionItem({ isOpen, onToggle, title, children }) {
  return (
    <section>
      <button onClick={onToggle}>{title}</button>

      {isOpen && <div>{children}</div>}
    </section>
  );
}
```

## Uncontrolled component

The component manages its own state.

```jsx
function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button onClick={() => setIsOpen((open) => !open)}>{title}</button>

      {isOpen && <div>{children}</div>}
    </section>
  );
}
```

Controlled components offer more coordination.

Uncontrolled components offer easier isolated use.

A component can support both, but the API must be carefully designed.

---

# 67. Component Composition Patterns

## 67.1 `children`

```jsx
function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

## 67.2 Named slots

```jsx
function Modal({ header, body, footer }) {
  return (
    <div className="modal">
      <header>{header}</header>
      <section>{body}</section>
      <footer>{footer}</footer>
    </div>
  );
}
```

Usage:

```jsx
<Modal
  header={<h2>Delete account?</h2>}
  body={<p>This cannot be undone.</p>}
  footer={<button>Delete</button>}
/>
```

## 67.3 Compound components

```jsx
const TabsContext = createContext(null);

function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext>
  );
}

function TabsList({ children }) {
  return <div role="tablist">{children}</div>;
}

function TabsTrigger({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      role="tab"
      aria-selected={activeTab === value}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, children }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) {
    return null;
  }

  return <div role="tabpanel">{children}</div>;
}
```

Usage:

```jsx
<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">Profile</TabsTrigger>

    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>

  <TabsContent value="profile">Profile content</TabsContent>

  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>
```

---

# 68. Render Props

A render prop is a function prop used to decide what to render.

```jsx
function MousePosition({ render }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onMouseMove={(event) =>
        setPosition({
          x: event.clientX,
          y: event.clientY,
        })
      }
    >
      {render(position)}
    </div>
  );
}
```

Usage:

```jsx
<MousePosition
  render={({ x, y }) => (
    <p>
      X: {x}, Y: {y}
    </p>
  )}
/>
```

Custom Hooks often replace render props for sharing logic, but render props are still useful and appear in older libraries.

---

# 69. Higher-Order Components

A Higher-Order Component is a function that receives a component and returns another component.

```jsx
function withLoading(Component) {
  return function ComponentWithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };
}
```

Usage:

```jsx
function UserList({ users }) {
  return users.map((user) => <p key={user.id}>{user.name}</p>);
}

const UserListWithLoading = withLoading(UserList);
```

HOCs are common in older React and library code. Hooks and composition are usually clearer for modern application logic.

Potential HOC problems:

- Wrapper nesting
- Prop collisions
- Harder debugging
- Static method handling
- Ref forwarding complexity

---

# 70. State Management Categories

Do not treat all state as one problem.

## Local UI state

Examples:

- Modal open/closed
- Active tab
- Input value
- Dropdown state

Use:

- `useState`
- `useReducer`

## Shared client state

Examples:

- Selected theme
- Shopping cart
- Complex editor state
- Multi-step draft

Possible tools:

- Lifted state
- Context
- Context plus reducer
- External state library

## Server state

Examples:

- Products from an API
- User profile from a server
- Notifications
- Paginated comments

Server state has special concerns:

- Loading
- Errors
- Caching
- Revalidation
- Stale data
- Deduplication
- Pagination
- Optimistic updates
- Request cancellation

A server-state library or framework data layer is often more appropriate than putting raw API data into global client state.

## URL state

Examples:

- Search query
- Page number
- Filters
- Selected product ID

Use the URL when users should be able to:

- Bookmark the state
- Share it
- Navigate backward and forward
- Refresh without losing it

---

# 71. Context Plus Reducer Pattern

```jsx
import { createContext, useContext, useReducer } from "react";

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

function todoReducer(todos, action) {
  switch (action.type) {
    case "added":
      return [
        ...todos,
        {
          id: action.id,
          title: action.title,
          completed: false,
        },
      ];

    case "toggled":
      return todos.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      );

    case "deleted":
      return todos.filter((todo) => todo.id !== action.id);

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoStateContext value={todos}>
      <TodoDispatchContext value={dispatch}>{children}</TodoDispatchContext>
    </TodoStateContext>
  );
}

function useTodos() {
  const todos = useContext(TodoStateContext);

  if (todos === null) {
    throw new Error("useTodos must be used inside TodoProvider");
  }

  return todos;
}

function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);

  if (dispatch === null) {
    throw new Error("useTodoDispatch must be used inside TodoProvider");
  }

  return dispatch;
}
```

Separating state and dispatch contexts can reduce unnecessary subscriptions for components that only dispatch actions.

---

# 72. Performance Optimization Strategy

Do not begin by memoizing everything.

Use this order:

## Step 1: Verify that there is a real problem

Use profiling tools and measure user-facing performance.

## Step 2: Keep state local

Do not move rapidly changing state higher than necessary.

## Step 3: Remove unnecessary Effects

Effect chains often cause extra renders.

## Step 4: Avoid redundant state

Calculate derived values during rendering.

## Step 5: Split large components

Smaller component boundaries can limit work and improve maintainability.

## Step 6: Virtualize large lists

Rendering thousands of rows can be expensive even when React updates efficiently.

## Step 7: Code split large routes and features

Use `lazy`, framework route splitting or dynamic imports.

## Step 8: Memoize measured bottlenecks

Use:

- React Compiler
- `memo`
- `useMemo`
- `useCallback`

## Step 9: Optimize network and assets

React rendering may not be the real bottleneck. Check:

- Large images
- Slow APIs
- Huge JavaScript bundles
- Waterfall requests
- Third-party scripts

---

# 73. Common Performance Mistakes

## Mistake 1: State too high

```jsx
function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <LargeApplication />
      <input value={input} onChange={(event) => setInput(event.target.value)} />
    </>
  );
}
```

Every keystroke renders `App` and normally visits its child tree.

Move input state closer to the input:

```jsx
function SearchInput() {
  const [input, setInput] = useState("");

  return (
    <input value={input} onChange={(event) => setInput(event.target.value)} />
  );
}
```

## Mistake 2: New object passed to a memoized child

```jsx
<Chart options={{ animation: true }} />
```

Creates a new object on every render.

Possible fix:

```jsx
const chartOptions = useMemo(
  () => ({
    animation: true,
  }),
  [],
);

<Chart options={chartOptions} />;
```

Only do this when stability meaningfully helps.

## Mistake 3: Expensive calculation during every render

```jsx
const result = expensiveCalculation(data);
```

Possible fix:

```jsx
const result = useMemo(() => expensiveCalculation(data), [data]);
```

## Mistake 4: Rendering huge lists

```jsx
items.map((item) => <LargeRow key={item.id} item={item} />);
```

For extremely large lists, render only the visible window.

## Mistake 5: Effect-based derived state

```jsx
useEffect(() => {
  setFilteredItems(filterItems(items, query));
}, [items, query]);
```

Better:

```jsx
const filteredItems = filterItems(items, query);
```

Or memoize it only if expensive.

---

# 74. Accessibility in React

React does not automatically make an interface accessible. Use semantic HTML first.

## Good button

```jsx
<button onClick={handleClick}>Open menu</button>
```

Avoid:

```jsx
<div onClick={handleClick}>Open menu</div>
```

The `<button>` already supports:

- Keyboard interaction
- Focus
- Screen reader semantics
- Disabled state

## Label inputs

```jsx
<label htmlFor="email">
  Email
</label>

<input id="email" type="email" />
```

## Icon-only button

```jsx
<button aria-label="Delete product">
  <TrashIcon aria-hidden="true" />
</button>
```

## Error relationship

```jsx
<input
  id="email"
  aria-invalid={Boolean(error)}
  aria-describedby={error ? "email-error" : undefined}
/>;

{
  error && <p id="email-error">{error}</p>;
}
```

## Modal considerations

A proper modal needs:

- Focus management
- Escape-key handling
- Focus restoration
- Correct dialog semantics
- Background interaction control

---

# 75. Security in React

## 75.1 Cross-site scripting

React escapes string values rendered through JSX.

```jsx
const userInput = "<img src=x onerror=alert(1)>";

return <div>{userInput}</div>;
```

It is displayed as text rather than interpreted as HTML.

## 75.2 `dangerouslySetInnerHTML`

```jsx
<div
  dangerouslySetInnerHTML={{
    __html: htmlContent,
  }}
/>
```

Only use it with trusted or properly sanitized HTML.

## 75.3 Never expose secrets in client code

Anything bundled into browser JavaScript can be inspected.

Do not place these in client-side React code:

- Private API secrets
- Database passwords
- Server tokens
- Payment provider secret keys

## 75.4 Client validation is not security

This is useful for user experience:

```jsx
if (!email.includes("@")) {
  setError("Invalid email");
}
```

But the server must validate again.

## 75.5 Authorization belongs on the server

Hiding a button is not authorization.

```jsx
{
  user.role === "admin" && <button>Delete user</button>;
}
```

An attacker can call the server endpoint directly. The backend must verify permissions.

## 75.6 Server Function security

Validate:

- Authentication
- Authorization
- Input schema
- Ownership
- Rate limits
- CSRF behaviour where applicable

Treat every Server Function as an externally callable server endpoint.

---

# 76. TypeScript With React

## Component props

```tsx
type UserCardProps = {
  name: string;
  age?: number;
  onSelect: (id: string) => void;
};

function UserCard({ name, age, onSelect }: UserCardProps) {
  return (
    <button onClick={() => onSelect("user-1")}>
      {name} {age !== undefined && `(${age})`}
    </button>
  );
}
```

## State

```tsx
type User = {
  id: string;
  name: string;
};

const [user, setUser] = useState<User | null>(null);
```

## Input event

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  setValue(event.target.value);
}
```

## Form event

```tsx
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}
```

## Button event

```tsx
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log(event.currentTarget);
}
```

## `children`

```tsx
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div>{children}</div>;
}
```

## Ref

```tsx
const inputRef = useRef<HTMLInputElement | null>(null);
```

## Reducer action union

```tsx
type State = {
  count: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | {
      type: "increaseBy";
      payload: number;
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "increaseBy":
      return {
        count: state.count + action.payload,
      };
  }
}
```

Discriminated unions give safer reducer actions.

---

# 77. Testing React Components

Test behaviour from the user's perspective.

Do not overfocus on implementation details such as internal state variables.

Example component:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p aria-live="polite">Count: {count}</p>

      <button onClick={() => setCount((value) => value + 1)}>Increase</button>
    </>
  );
}
```

Conceptual test:

```jsx
test("increases the count", async () => {
  render(<Counter />);

  const user = userEvent.setup();

  await user.click(
    screen.getByRole("button", {
      name: /increase/i,
    }),
  );

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

Prefer queries based on accessibility:

1. `getByRole`
2. `getByLabelText`
3. `getByPlaceholderText`
4. `getByText`
5. `getByTestId` as a fallback

## Async test

```jsx
test("displays loaded users", async () => {
  render(<UserList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  expect(await screen.findByText("Navneet")).toBeInTheDocument();
});
```

## Testing philosophy

Test:

- What users see
- What users click
- Form validation
- Loading states
- Error states
- Successful results
- Accessibility behaviour

Avoid testing:

- Exact Hook implementation
- Private functions
- Internal variable names
- Whether `setState` was called

---

# 78. Error Handling Strategy

A robust application handles errors at several levels.

## Event or request error

```jsx
async function handleSave() {
  try {
    setStatus("loading");

    await saveData();

    setStatus("success");
  } catch (error) {
    setError(error.message);
    setStatus("error");
  }
}
```

## Rendering error

Use an Error Boundary.

```jsx
<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>
```

## Route error

Use the routing framework's route-level error boundary.

## Form Action error

Return expected validation errors as data.

```jsx
return {
  success: false,
  fieldErrors: {
    email: "Invalid email",
  },
};
```

Throw unexpected errors so the nearest Error Boundary can handle them.

---

# 79. Reusable Data-Fetching State Machine

Avoid multiple contradictory booleans.

```jsx
const [request, setRequest] = useState({
  status: "idle",
  data: null,
  error: null,
});
```

Transitions:

```txt
idle → loading
loading → success
loading → error
error → loading
success → loading
```

Example:

```jsx
async function loadProducts() {
  setRequest({
    status: "loading",
    data: null,
    error: null,
  });

  try {
    const response = await fetch("/api/products");

    if (!response.ok) {
      throw new Error("Unable to load products");
    }

    const products = await response.json();

    setRequest({
      status: "success",
      data: products,
      error: null,
    });
  } catch (error) {
    setRequest({
      status: "error",
      data: null,
      error: error.message,
    });
  }
}
```

Rendering:

```jsx
if (request.status === "idle") {
  return <button onClick={loadProducts}>Load</button>;
}

if (request.status === "loading") {
  return <p>Loading...</p>;
}

if (request.status === "error") {
  return (
    <>
      <p>{request.error}</p>
      <button onClick={loadProducts}>Retry</button>
    </>
  );
}

return <ProductList products={request.data} />;
```

---

# 80. Complete Todo Application Example

```jsx
import { useMemo, useState } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Learn JSX",
    completed: true,
  },
  {
    id: 2,
    title: "Learn state",
    completed: false,
  },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);

    setTitle("");
  }

  function toggleTodo(todoId) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoId),
    );
  }

  const visibleTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);

      case "completed":
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }
  }, [todos, filter]);

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <main>
      <h1>Todo Application</h1>

      <form onSubmit={addTodo}>
        <label>
          New task
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <button disabled={!title.trim()}>Add todo</button>
      </form>

      <div>
        <button
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          aria-pressed={filter === "active"}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          aria-pressed={filter === "completed"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />

              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            </label>

            <button
              onClick={() => deleteTodo(todo.id)}
              aria-label={`Delete ${todo.title}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>{remainingCount} tasks remaining</p>
    </main>
  );
}
```

What this example demonstrates:

- Controlled input
- Form submission
- Immutable array updates
- Stable keys
- Functional updates
- Conditional styles
- Derived data
- Filtering
- Accessibility attributes
- Memoized calculation

---

# 81. Common React Mistakes

## Mistake 1: Calling a handler during render

Incorrect:

```jsx
<button onClick={deleteUser(user.id)}>Delete</button>
```

Correct:

```jsx
<button onClick={() => deleteUser(user.id)}>Delete</button>
```

## Mistake 2: Mutating state

Incorrect:

```jsx
todos.push(newTodo);
setTodos(todos);
```

Correct:

```jsx
setTodos((currentTodos) => [...currentTodos, newTodo]);
```

## Mistake 3: Missing return in `map`

Incorrect:

```jsx
users.map((user) => {
  <p>{user.name}</p>;
});
```

Correct:

```jsx
users.map((user) => {
  return <p key={user.id}>{user.name}</p>;
});
```

Or:

```jsx
users.map((user) => <p key={user.id}>{user.name}</p>);
```

## Mistake 4: Using array index as a dynamic key

```jsx
items.map((item, index) => <Item key={index} item={item} />);
```

Use a stable ID when possible.

## Mistake 5: Wrong state update

```jsx
setCount(count++);
```

`count++` mutates the local variable and returns its previous value.

Use:

```jsx
setCount((count) => count + 1);
```

## Mistake 6: Copying props into state unnecessarily

```jsx
function User({ name }) {
  const [userName, setUserName] = useState(name);
}
```

The state does not automatically update when `name` changes.

Use the prop directly unless you intentionally need an editable local draft.

## Mistake 7: Using Effect for calculations

```jsx
useEffect(() => {
  setTotal(price * quantity);
}, [price, quantity]);
```

Use:

```jsx
const total = price * quantity;
```

## Mistake 8: Missing cleanup

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);
}, []);
```

Better:

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

## Mistake 9: Conditional Hook

```jsx
if (open) {
  useEffect(() => {});
}
```

Hooks must remain at the top level.

## Mistake 10: Declaring a component inside another component

```jsx
function App() {
  function Input() {
    const [value, setValue] = useState("");
    return <input />;
  }

  return <Input />;
}
```

A new component type is created on each `App` render, which can reset state.

Move it outside:

```jsx
function Input() {
  const [value, setValue] = useState("");
  return <input />;
}

function App() {
  return <Input />;
}
```

---

# 82. Important Interview Questions and Answers

## 1. What is React?

React is a JavaScript library for building user interfaces through declarative, reusable components.

## 2. What is a component?

A component is a reusable unit of UI logic and markup. Modern components are usually JavaScript functions that return JSX.

## 3. What is JSX?

JSX is a JavaScript syntax extension used to describe UI markup. Build tools transform it into React element creation instructions.

## 4. What are props?

Props are read-only inputs passed from a parent component to a child component.

## 5. What is state?

State is component memory that persists between renders and can trigger rendering when updated.

## 6. Props versus state?

Props come from a parent and are read-only to the receiving component. State is owned and updated by the component that declares it.

## 7. What causes a component to render?

Initial mounting, its state update, parent rendering, context changes, external-store updates and Suspense retries can cause rendering.

## 8. Does `setState` update immediately?

It queues an update. The current render's state remains a snapshot.

## 9. Why use functional state updates?

Use them when the next state depends on the previous state.

```jsx
setCount((count) => count + 1);
```

## 10. Why should state not be mutated?

Mutation can prevent React from seeing a new reference, corrupt previous render snapshots and create unpredictable shared changes.

## 11. What is one-way data flow?

Data generally moves from parent to child through props. Children communicate changes upward through callbacks.

## 12. What is lifting state up?

Moving shared state to the closest common parent so multiple children use one source of truth.

## 13. What is prop drilling?

Passing props through intermediate components that do not use them solely to reach deeper components.

## 14. How can prop drilling be handled?

Composition, restructuring components, Context or an appropriate state management solution.

## 15. What is Context?

A way for components to read shared values from a provider above them without manually passing those values through every level.

## 16. When should Context not be used?

For every local state value, extremely high-frequency broad updates or as an automatic replacement for all state-management decisions.

## 17. What is a Hook?

A special function that lets function components use React capabilities such as state, Effects, refs and context.

## 18. What are the Rules of Hooks?

Call Hooks at the top level and only from React components or custom Hooks.

## 19. What is `useEffect` for?

Synchronizing a component with systems outside React.

## 20. What does the Effect dependency array do?

It declares reactive values whose changes require the synchronization to run again.

## 21. What does an empty dependency array mean?

The Effect does not resynchronize because of reactive dependency changes. It still runs setup when mounted and cleanup when removed, with additional development checks possible under Strict Mode.

## 22. What is Effect cleanup?

A returned function that undoes subscriptions, listeners, timers, connections or requests established by the Effect.

## 23. What is a stale closure?

A callback reading props or state captured from an older render rather than the latest intended value.

## 24. How can stale closure problems be fixed?

Correct dependencies, functional updates, restructuring logic, refs in limited cases or `useEffectEvent` for appropriate Effect-local event logic.

## 25. `useEffect` versus `useLayoutEffect`?

`useLayoutEffect` runs before browser paint and can block it. `useEffect` generally runs after paint and should be preferred unless layout measurement must happen before display.

## 26. What is `useRef`?

A Hook returning a persistent mutable object whose `current` value can change without causing rendering.

## 27. State versus ref?

Use state when the value affects rendering. Use a ref for DOM access or mutable information that does not need to update the UI.

## 28. What is `useReducer`?

A Hook that manages state through a reducer receiving the current state and an action and returning the next state.

## 29. When is `useReducer` better than `useState`?

For complex transitions, many related fields, many action types or centralized update logic.

## 30. What is a custom Hook?

A `use`-prefixed function that combines Hooks to share stateful logic.

## 31. Do custom Hooks share state?

No. They share logic. Each call receives its own Hook state unless it subscribes to a shared external source.

## 32. What is reconciliation?

React's process of comparing the previous and next UI descriptions to determine necessary host-environment changes.

## 33. What is the Virtual DOM?

A common term for React's in-memory representation of the desired UI used during rendering and reconciliation.

## 34. What is a key?

A stable identity assigned to an element among siblings, especially list elements.

## 35. Why should index not normally be used as a key?

When a list changes order, React can associate component state and DOM with the wrong data item.

## 36. What is a controlled component?

A component whose important value or behaviour is controlled by props, commonly an input whose `value` comes from state.

## 37. What is an uncontrolled component?

A component or input that owns its value internally or leaves it in the DOM, commonly accessed using a ref.

## 38. What is `React.memo`?

A performance optimization that can skip rendering a component when its props are unchanged.

## 39. Does `memo` prevent every render?

No. State, context, changed props and React's own decisions can still cause rendering.

## 40. What is `useMemo`?

A Hook that caches the result of a calculation between renders.

## 41. What is `useCallback`?

A Hook that caches a function definition between renders.

## 42. When should memoization be used?

After identifying meaningful rendering or calculation work where stable identities or cached calculations measurably help.

## 43. What is referential equality?

Objects, arrays and functions are equal only when they reference the same identity, not merely when their contents look equal.

## 44. What is Strict Mode?

A development-only tool that enables additional checks for impurities, cleanup problems and deprecated behaviour.

## 45. Why does an Effect appear to execute twice in development?

Strict Mode may intentionally run an extra setup-cleanup cycle to expose missing cleanup and impure behaviour.

## 46. What is code splitting?

Dividing JavaScript into separately loaded chunks so users do not download every feature initially.

## 47. What are `lazy` and `Suspense`?

`lazy` loads component code dynamically. Suspense displays fallback UI while a descendant is suspended.

## 48. Does Suspense automatically handle `useEffect` fetching?

No. Traditional Effect-based fetching does not automatically integrate with Suspense.

## 49. What is an Error Boundary?

A component that catches rendering errors below it and displays fallback UI.

## 50. Do Error Boundaries catch click-handler errors?

Not generally. Event-handler errors should be handled with normal error handling such as `try/catch`.

## 51. What is a portal?

A way to render JSX into a different DOM container while keeping it inside the same React tree.

## 52. What is hydration?

Attaching React behaviour to HTML that was already generated on the server.

## 53. SSR versus CSR?

SSR creates HTML on the server. CSR primarily creates the UI in the browser after JavaScript loads.

## 54. Server Components versus SSR?

Server Components determine where component code executes and what JavaScript reaches the client. SSR determines whether HTML is produced on the server for initial display.

## 55. What is a Client Component?

In a Server Components framework, a client-marked component can use state, Effects, event handlers and browser APIs.

## 56. What is a Server Function?

A function referenced by client code but executed on the server in a compatible framework.

## 57. Are Server Functions automatically secure?

No. They must perform authentication, authorization and input validation.

## 58. What is `useTransition`?

A Hook for marking updates as non-blocking and accessing their pending state.

## 59. What is `useDeferredValue`?

A Hook that lets a non-urgent part of the UI use a deferred version of a rapidly changing value.

## 60. Transition versus debounce?

A Transition changes rendering priority. Debouncing delays work by a fixed amount and can reduce external actions such as requests.

## 61. What is `useActionState`?

A Hook for managing state and pending status associated with an Action.

## 62. What is `useOptimistic`?

A Hook for displaying an expected state immediately while an asynchronous update is pending.

## 63. What is `useFormStatus`?

A React DOM Hook that reads submission status from the nearest parent form.

## 64. What is React's `use` API?

An API that reads resources such as Promises or context and can suspend while a Promise is pending.

## 65. Can `use` be called conditionally?

Yes, unlike most Hooks, although it must still be called within a component or Hook.

## 66. What is React Compiler?

A build-time optimizer that can automatically memoize React components and values.

## 67. Is `forwardRef` required in React 19?

No. A function component can receive `ref` as a prop. You should still understand `forwardRef` for older code.

## 68. What is `<Activity>`?

A React 19.2 component that can hide a subtree, clean up its Effects and later reveal it with its state restored.

## 69. What is derived state?

A value that can be calculated from existing props or state, such as a filtered list or full name.

## 70. Should derived values be stored in state?

Usually no. Calculate them while rendering unless there is a strong reason otherwise.

## 71. What is state colocation?

Keeping state as close as possible to the components that need it.

## 72. Why is state colocation useful?

It limits unnecessary renders, reduces coupling and makes ownership clear.

## 73. What does composition mean in React?

Building larger components by combining smaller components, often through `children` or component props.

## 74. What is a Higher-Order Component?

A function that receives a component and returns an enhanced component.

## 75. What is a render prop?

A function prop that returns JSX and lets a component share data or behaviour with custom rendering.

## 76. What is the difference between mounting and rendering?

Mounting is the component's first insertion into the UI tree. Rendering is React calling component logic to calculate UI and can happen many times.

## 77. What is unmounting?

Removing a component from the UI tree, destroying its local state and running cleanup.

## 78. Why should components be pure?

React may render more than once, pause work or discard an attempted render. Pure components remain predictable under these behaviours.

## 79. Why should APIs not be called during rendering?

Rendering may happen multiple times and should have no external side effects. Requests belong in event actions, Effects or framework data layers.

## 80. What is the best way to optimize React?

Measure first, improve state placement and architecture, remove unnecessary Effects, reduce expensive work, split code, virtualize large lists and memoize verified bottlenecks.

---

# 83. Practical Interview Coding Problems

You should be able to build these without copying:

## Beginner

1. Counter with increment, decrement and reset.
2. Show/hide password.
3. Character counter.
4. Controlled login form.
5. Todo list.
6. Search filter.
7. Accordion.
8. Tabs.
9. Modal.
10. Theme toggle.

## Intermediate

1. Debounced search.
2. Paginated list.
3. Infinite scrolling.
4. Reusable fetching Hook.
5. Stopwatch.
6. Countdown timer.
7. Shopping cart with reducer.
8. Authentication Context.
9. Form with validation.
10. Sortable/filterable table.
11. Optimistic comment form.
12. Error Boundary.
13. Portal-based modal.
14. Lazy-loaded route.
15. Multi-step form.

## Advanced

1. Compound Tabs API.
2. Accessible modal with focus management.
3. Undo/redo reducer.
4. External store using `useSyncExternalStore`.
5. Virtualized list.
6. Suspense resource integration.
7. Optimistic mutation rollback.
8. Server Action form.
9. Component library input with imperative ref API.
10. Performance profiling and optimization exercise.

---

# 84. React Interview Debugging Questions

## Question 1

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={increase}>{count}</button>;
}
```

Why does it increase by one?

Both updates use the same state snapshot.

Fix:

```jsx
setCount((count) => count + 1);
setCount((count) => count + 1);
```

## Question 2

```jsx
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, [users]);
}
```

What is wrong?

The Effect updates `users`, and `users` is a dependency, creating a request loop.

Possible correction:

```jsx
useEffect(() => {
  fetchUsers().then(setUsers);
}, []);
```

Also add cancellation and error handling.

## Question 3

```jsx
function List({ items }) {
  return items.map((item, index) => <Input key={index} value={item.name} />);
}
```

What problem can occur?

When items are reordered or deleted, React can preserve the wrong `Input` state because the index identity now refers to different data.

Use:

```jsx
<Input key={item.id} value={item.name} />
```

## Question 4

```jsx
const [user, setUser] = useState({
  name: "Aman",
});

function rename() {
  user.name = "Navneet";
  setUser(user);
}
```

What is wrong?

It mutates the existing state object and passes the same reference.

Fix:

```jsx
setUser((user) => ({
  ...user,
  name: "Navneet",
}));
```

## Question 5

```jsx
useEffect(() => {
  setFiltered(products.filter((product) => product.name.includes(query)));
}, [products, query]);
```

Can it be improved?

Yes. `filtered` is derived state.

```jsx
const filtered = products.filter((product) => product.name.includes(query));
```

Memoize only if the calculation is meaningfully expensive.

## Question 6

```jsx
function App() {
  function Child() {
    const [count, setCount] = useState(0);
    return <button>{count}</button>;
  }

  return <Child />;
}
```

Why can the child's state reset?

A new `Child` component type is created whenever `App` renders.

Move `Child` outside `App`.

---

# 85. How to Explain a React Project in an Interview

Use this structure:

## 1. Problem

> I built a meeting platform that lets users create AI-assisted sessions and manage meeting results.

## 2. Architecture

> The application is divided into route-level pages, reusable UI components, feature modules, API services and shared Hooks.

## 3. State decisions

> Local UI state uses `useState`. Complex feature state uses reducers. Server data is handled separately through a server-state layer.

## 4. Data flow

> The page fetches data through the API layer, passes relevant values to feature components and handles mutations with loading, error and optimistic states.

## 5. Performance

> Large pages are code-split, derived data is calculated rather than duplicated, and memoization is used only for measured expensive components.

## 6. Reliability

> Requests have error handling, pending states and cleanup. Risky UI regions use Error Boundaries.

## 7. Security

> Authorization and validation are enforced on the server; secrets are never exposed in the browser.

## 8. Testing

> Important user flows are tested through visible behaviour rather than implementation details.

## 9. Trade-offs

> I chose this structure because it keeps state ownership clear, but for a much larger team I would introduce stricter feature boundaries and more automated integration testing.

---

# 86. Recommended Study Order

## Phase 1: Fundamentals

Master:

- JSX
- Components
- Props
- State
- Events
- Conditional rendering
- Lists and keys
- Forms

Build:

- Counter
- Todo application
- Search filter
- Basic form

## Phase 2: State management

Master:

- State snapshots
- Functional updates
- Immutable updates
- State structure
- Lifting state
- Controlled components
- `useReducer`
- Context

Build:

- Shopping cart
- Authentication system
- Multi-step form

## Phase 3: Effects and external systems

Master:

- `useEffect`
- Dependencies
- Cleanup
- Race conditions
- Stale closures
- `useRef`
- Custom Hooks
- `useEffectEvent`

Build:

- API dashboard
- Timer
- Online status Hook
- Debounced search

## Phase 4: Advanced React

Master:

- Reconciliation
- Keys and state preservation
- `memo`
- `useMemo`
- `useCallback`
- Transitions
- Suspense
- Error Boundaries
- Portals
- Performance
- Accessibility

Build:

- Large searchable table
- Accessible modal
- Lazy-loaded application
- Optimistic mutation

## Phase 5: Modern React

Master:

- Actions
- `useActionState`
- `useOptimistic`
- `useFormStatus`
- `use`
- `<Activity>`
- Server Components
- Server Functions
- React Compiler
- Ref as a prop

---

# 87. Final Interview Checklist

You are ready for most junior-to-mid-level React interviews when you can explain and implement the following without notes:

- JSX rules
- Components and composition
- Props and `children`
- State and functional updates
- State snapshots and batching
- Events
- Forms
- Controlled and uncontrolled inputs
- Lists and keys
- Immutable object and array updates
- Lifting state
- Good state structure
- State preservation and reset
- Rules of Hooks
- `useEffect` and cleanup
- Dependency arrays
- Stale closures
- `useRef`
- `useReducer`
- Context
- Custom Hooks
- Re-render causes
- Render and commit phases
- Reconciliation
- Strict Mode
- `memo`
- `useMemo`
- `useCallback`
- Lazy loading
- Suspense
- Error Boundaries
- Portals
- Accessibility
- Security basics
- Testing principles
- TypeScript props and events
- `useTransition`
- `useDeferredValue`
- Actions
- `useActionState`
- `useOptimistic`
- `useFormStatus`
- `use`
- Server Components
- Server Functions
- React Compiler
- React 19 ref handling
- `<Activity>`

The most important interview skill is not memorizing definitions. It is being able to explain:

1. What problem a feature solves.
2. How it works.
3. When you would use it.
4. When you would avoid it.
5. What trade-offs it introduces.
6. How you would demonstrate it with code.
