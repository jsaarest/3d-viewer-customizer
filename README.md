# Customize 3D object colors in web

Originated as a weekend project. This 3D model viewer is R3F https://github.com/pmndrs/react-three-fiber based viewer, where the object colors can be customized.

## Creating JSX component from .glb or .gltf
Repo: https://github.com/pmndrs/gltfjsx

1) Put the object into /public folder of your project repository
2) Run this command

``` 
npx gltfjsx [object name]
```
3) Now you got [object name].js file which you can use as a React component

``` js
function Scene(){
  return(
    <Canvas>
      <MyObject />
    </Canvas>
  )
};

```
