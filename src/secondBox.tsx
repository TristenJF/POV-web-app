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
                <li class='p-2'>When building your reactive components with Vue, you might want to try out a variety of component values or manipulate component data in realtime.</li>
                <li class='p-2'>With this feature, you can edit all data types, toggle Boolean values, and manipulate array values.</li>
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