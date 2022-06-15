export default function SecondBox() {
  return (
    <>
      <div class="container p-5">
        
        <div class="row">
          <div class="col-7">
          <div class="text-right">
          <h1 class="display-2">Edit Component State</h1>
        </div>
            <h3 class='text-muted'>
              <ul>
                <li class='text-muted'>A timeline to track actions, mutations</li>
                <li>Time travel debugging: This allows you to see if your events are triggered correctly and inspect the state associated with the time of the event.</li>
                <li>State inspector panel used to view and debug current state</li>
              </ul>
            </h3>

          </div>
          <div class="col-sm pt-5">
            <img class='img-fluid border border-dark rounded box-shadow' src='Assets/timeline-crop.gif' />
          </div>
        </div>
      </div>
    </>
  )
}