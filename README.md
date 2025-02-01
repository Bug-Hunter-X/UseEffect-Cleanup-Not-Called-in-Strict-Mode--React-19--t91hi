# useEffect Cleanup Issue in React 19 Strict Mode

This repository demonstrates a subtle issue related to the `useEffect` hook's cleanup function in React 19 when Strict Mode is enabled.  In certain situations, the cleanup function might not be consistently called when a component unmounts.

The `bug.js` file contains a simple component that uses `useEffect` with a cleanup function.  The intended behavior is for 'Unmounted!' to be logged to the console when the component is unmounted.  However, under strict mode this may not happen reliably. 

The `bugSolution.js` file provides a potential workaround and explanation.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console output when mounting and unmounting the component.  The inconsistency becomes apparent when using React Strict Mode, which is enabled by default in development for many create-react-app instances.

## Solution

The solution often lies in carefully reviewing how state updates or external resources are handled within the component and ensuring that any necessary cleanup logic is correctly implemented within the cleanup function of the useEffect hook.