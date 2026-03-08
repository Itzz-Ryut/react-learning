// PageLayout — defines the structure of every page
// navbar   = what goes in the top bar    (named prop)
// children = what goes in the main area  (between tags)
// footer   = what goes in the bottom bar (named prop)

function PageLayout({ navbar, children, footer }) {
  return (
    <div className='layout'>
      {/* TOP — position is fixed, content is flexible */}
      <header className='layout-header'>{navbar}</header>

      {/* MIDDLE — position is fixed, content is flexible */}
      <main className='layout-main'>{children}</main>

      {/* BOTTOM — position is fixed, content is flexible */}
      <footer className='layout-footer'>{footer}</footer>
    </div>
  );
}

export default PageLayout;
