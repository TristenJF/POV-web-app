import TopMenu from "./topMenu";
import ContentBoxLeft from './contentBoxLeft';
import ContentBoxRight from "./contentBoxRight";
import TeamSection from './teamSection';
import Spacer from './spacer';
import FirstBox from "./firstBox";
import SecondBox from './secondBox';
export default function App() {
  return (
    <>
      <TopMenu />
      <div class="jumbotron jumbotron-fluid">
        <div class="container py-5">
          <h1 class="display-4 text-center">Point of Vue</h1>
          <p class="lead text-center">The answer to Vue reactive state debugging and visualization</p>
        </div>
      </div>
      <div id='mid'>
        <Spacer />
        <FirstBox />
        {/* <ContentBoxRight title='Features' text='Morbi ut varius dui. Maecenas vitae rhoncus orci. Nunc scelerisque fringilla dolor, vitae imperdiet tellus blandit nec. Vivamus id lacus facilisis, tempus nisl eget, euismod dolor. Nullam vel auctor nunc. Praesent sed diam nec felis suscipit hendrerit eu quis nisl. Phasellus tellus nibh, euismod vel velit et, tincidunt dictum sapien. Cras volutpat tempor ullamcorper. Fusce in lectus et massa ornare faucibus id a ex. Maecenas quis imperdiet eros. Donec aliquam nisl eget quam auctor volutpat. Nullam placerat finibus eros nec viverra. Vivamus eu felis blandit, posuere lacus accumsan, porta felis.' image="Assets/state-editor demo.gif" /> */}
        <SecondBox />
        <Spacer />

        {/* <ContentBoxLeft title='Devtool Integration' text='Vestibulum elit dolor, posuere at tristique id, convallis sed nunc. Vivamus vulputate imperdiet sem eget molestie. Mauris bibendum nunc elementum, viverra quam nec, sollicitudin tellus. Nunc non ipsum gravida, maximus urna sed, sodales tortor. Pellentesque eleifend diam id sodales dignissim. Ut imperdiet ultrices mi laoreet vulputate. Integer eu orci sed arcu posuere tempus. Nunc vitae malesuada sapien. Pellentesque scelerisque vitae lorem eget posuere. Vestibulum eu scelerisque ipsum. Maecenas sapien ante, imperdiet vitae lacus et, vehicula imperdiet magna. Nam dignissim magna eget molestie porttitor. Etiam quis ultricies urna, vitae rhoncus nunc.' image='Assets/state-panel-demo.gif' /> */}
        <Spacer />
        <ContentBoxRight title='Some Other Stuff' text='Pellentesque eu blandit metus, ut dignissim leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada efficitur finibus. Vivamus nec vestibulum dolor, vel interdum nisl. Mauris ut urna non nisl consectetur iaculis. Etiam non ante ut orci venenatis gravida malesuada vitae elit. Praesent tincidunt finibus neque, et dignissim lacus pellentesque a. Quisque mattis, risus in mollis ultricies, sem enim placerat ipsum, sit amet tincidunt sem est vitae libero. Integer dictum sapien orci, at dictum justo vestibulum id. Pellentesque vel felis et elit condimentum congue. Suspendisse nec sagittis lorem. Curabitur in odio vel urna laoreet sollicitudin. Quisque accumsan ipsum non dictum ultrices. Proin eget consectetur urna, ut congue ligula. Nulla ut lacinia mi.' image='Assets/state-timeline.gif' />
        <Spacer />
        <ContentBoxLeft title='Some Other Stuff' text='Pellentesque eu blandit metus, ut dignissim leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada efficitur finibus. Vivamus nec vestibulum dolor, vel interdum nisl. Mauris ut urna non nisl consectetur iaculis. Etiam non ante ut orci venenatis gravida malesuada vitae elit. Praesent tincidunt finibus neque, et dignissim lacus pellentesque a. Quisque mattis, risus in mollis ultricies, sem enim placerat ipsum, sit amet tincidunt sem est vitae libero. Integer dictum sapien orci, at dictum justo vestibulum id. Pellentesque vel felis et elit condimentum congue. Suspendisse nec sagittis lorem. Curabitur in odio vel urna laoreet sollicitudin. Quisque accumsan ipsum non dictum ultrices. Proin eget consectetur urna, ut congue ligula. Nulla ut lacinia mi.' image='Assets/troubleshoot.gif' />
      </div>
      <div class='text-center'>
        <h1 class='display-4'>Checkout our Article</h1>
        <a href="">Medium</a>
      </div>
      <TeamSection />
    </>

  );
}