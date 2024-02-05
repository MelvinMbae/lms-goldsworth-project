import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

function DownloadPDF({ downloadElement }) {

    function downloadbutton(){
        const comp = document.getElementById(downloadElement)
        html2canvas(comp).then((canvas)=>{
            const downloadImage = canvas.toDataURL('image/png')
            const pdf = new jsPDF()
            pdf.addImage(downloadImage, 'PNG', 0 , 0)
            pdf.save('downoadFile.pdf')
        })
    }

  return (
    <button onClick={downloadbutton} className='btn'> Download PDF </button>
  )
}

export default DownloadPDF