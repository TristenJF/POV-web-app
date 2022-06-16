export default function contentBoxLeft(props) {
  return (
    <>
      <div class="container">
        <div class='row justify-content-end'>
          <div class='column'>
            <h1 class="display-2">{props.title}</h1>
          </div>

        </div>

        <div class="row">
          <div class="col-sm">
            <img class='img-fluid' src={props.image} />
          </div>
          <div class="col-8">
            {props.text}
          </div>
        </div>
      </div>
    </>
  );
}