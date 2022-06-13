import topMenu from "./topMenu";
export default function App() {
  return (
    <>
    <div class="flex" text-align='true'>
      <div class="flex">
        <h1>Point of Vue</h1>
        {/* {topMenu()} */}
        <topMenu />
      </div>
    </div>
    </>
    
  );
}