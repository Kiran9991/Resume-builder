export default  function PrintPdf() {
  let divContents = document.getElementById("resumeDownload").innerHTML;
  let printWindow = window.open("", "", "height=500, width=500");
  const styles = Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        if (styleSheet.href) {
          return `<link rel="stylesheet" href="${styleSheet.href}">`;
        } else {
          return `<style>
            ${Array.from(styleSheet.cssRules)
              .map((rule) => rule.cssText)
              .join("")}
          </style>`;
        }
      } catch (e) {
        return e;
      }
    })
    .join("");
  console.log(styles);
  printWindow.document.open();
  printWindow.document.write(`
                <html>
                <head>
                    <title>Print Div Content</title>

                    ${styles}
                    <style>
                        .previewSection{
                        margin:50px;
                        }
                    </style>
                </head>
                <body>
                    ${divContents}
                </body>
                </html>
            `);
  printWindow.document.close();
  printWindow.print();
}