export default function FirstBox() {
  return (
    <>
      <div class="container p-5">
        <div class='row justify-content-end'>
          <div class='column'>
            <h1 class="display-2 text-center p-4">Features</h1>
          </div>

        </div>

        <div class="row">
          <div class="col-sm">
            <img class='img-fluid border border-dark rounded box-shadow' src='Assets/state-panel-crop.gif' />
          </div>
          <div class="col-7">
          <h3 class='text-muted'>
              <ul>
                <li class='p-2'>A timeline to track actions, mutations</li>
                <li class='p-2'>Time travel debugging: This allows you to see if your events are triggered correctly and inspect the state associated with the time of the event.</li>
                <li class='p-2'>State inspector panel used to view and debug current state</li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}