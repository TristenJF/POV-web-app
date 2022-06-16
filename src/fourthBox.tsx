export default function FourthBox() {
  return (
    <>
      <div class="container p-5">
        
        <div class="row">
          <div class="col-7">
          {/* <div class="text-right">
          <h1 class="display-2">Edit Component State</h1>
        </div> */}
            <h4 class='text-muted'>
              <ul>
                <li class='p-2'>A timeline to track actions, mutations</li>
                <li class='p-2'>Expanding functionality to include state created with Pinia</li>
                <li class='p-2'>Currently the user must first visit the Inspect Components tab of the Vue devtools to be able to access state in the Point-Of-Vue tab, a future feature will avoid this minor inconvenience, improving the UI</li>
              </ul>
            </h4>

          </div>
          <div class="col-sm">
            <img class='img-fluid border border-dark rounded box-shadow' src='Assets/troubleshoot-crop.gif' />
          </div>
        </div>
      </div>
    </>
  )
}