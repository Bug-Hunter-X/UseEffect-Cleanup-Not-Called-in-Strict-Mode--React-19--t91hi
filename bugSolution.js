```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // This effect runs only on the first render
    console.log('Mounted!');
    return () => {
      // Cleanup function, only runs if mounted is true when unmounting
      if (mounted) console.log('Unmounted!');
      setMounted(false);
    };
  }, [mounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```