import '../styles/projectpreview.css';

function Preview({title, date, summary, imagePath}:any) {
  return (
    <>
      <div className="preview-padding" />
        <div className="project-preview">
          <div className="preview-title">
            <div className="preview-title-text">
		          <div className="project-title">{title}</div>
		          <div className="project-date">{date}</div>
            </div>
            <div className="preview-image">
              <img src={imagePath} alt="test image" />
            </div>
          </div>
          <div className="preview-summary">
            {summary}
          </div>
        </div>
      <div className="preview-padding" />
    </>
  )
}

export function ProjectPreview() {
  const testPreview = {
    id: "some id",
    title: "Some Title",
    date: "xx/xx/xxxx",
    summary: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus aptent aenean augue tellus parturient efficitur; ut ullamcorper primis. Curabitur dignissim natoque vitae luctus sit fusce netus. Euismod nec lacus curae egestas arcu ligula bibendum sit libero. Maximus mi aliquet dictum senectus sodales nisi sagittis. Vitae integer nulla sollicitudin laoreet taciti nunc enim. Dapibus tempor euismod tristique libero egestas. Feugiat nisl primis laoreet interdum arcu ad aliquam. Sit maecenas dictum nunc; risus risus commodo accumsan. Pellentesque placerat praesent suscipit vehicula ornare ullamcorper. Molestie diam parturient nullam pulvinar nam consequat. Fusce litora fringilla curae diam sem viverra rhoncus.",
    imagePath:"images/project-images/test.jpeg" ,
  }

  const anotherPreview = {
    id: "some other id",
    title: "Another Title",
    date: "xx/xx/xxxx",
    summary: "This is a summary for another preview that I don't care to make as long.",
    imagePath:"images/project-images/test1.jpeg",
  }

  let previewDatasets = [testPreview, anotherPreview, testPreview, testPreview, testPreview, testPreview];
  let previews:any = [];

  for (let i = 0; i < previewDatasets.length; i++) {
    let data = previewDatasets[i];
    previews.push(<Preview key={data.id} title={data.title} date={data.date} summary={data.summary} imagePath={data.imagePath} />);
  }

  return (
    <>
    <div className="scrollable-container">  
      <div className="left-preview-area" style={{height: previews.length * 200}} />
      <div className="right-preview-area" />
      <div className="center-preview-area">
        {previews}
      </div>
    </div>
    </>
  );
}
