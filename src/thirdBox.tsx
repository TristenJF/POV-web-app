export default function ThirdBox() {
  return (
    <>
      <div class="container p-5">
        <div class='row justify-content-end'>
          <div class='column'>
            <h1 class="display-2 text-center p-4">Hot Module Replacement</h1>
          </div>

        </div>

        <div class="row">
          <div class="col-sm">
            <img class='img-fluid border border-dark rounded box-shadow' src='Assets/state-edits-recrop.gif' />
          </div>
          <div class="col-7">
          <h3 class='text-muted'>
              <ul>
                <li class='p-4'>Modify your stores without reloading your page</li>
                <li class='p-4'>Keep any existing state while developing</li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}