export default function contentBoxLeft (props) {
  return (
    <>
<div class="container">
  <div class="text-right">
    <h1 class="display-2 text-center">{props.title}</h1>
  </div>
    <div class="row">
      <div class="col-8">
      {props.text}
    </div>
    <div class="col-sm">
    <img class='img-fluid' src={props.image}/>
    </div>
  </div>
</div>
    </>
  );
}