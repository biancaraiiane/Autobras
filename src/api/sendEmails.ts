import axios from 'axios'

interface emailData {
  name: string
  phone: string
  emailAddress: string
  carYear: string
  Vin: string
  make: string
  model: string
  carGlass: string
}

export async function sendEmails(data: emailData) {
  try {
    const apiUrl = 'https://api.emailjs.com/api/v1.0/email/send-form'

    const apiKey = '9M3Ehw4vrlCvMlRa9'

    const emailData = new FormData()
    emailData.append('service_id', 'service_26qdyrq')
    emailData.append('template_id', 'template_9s1xsqb')
    emailData.append('user_id', apiKey)
    emailData.append('from', data.emailAddress)
    emailData.append('to', 'quotes@autobrasglass.com')
    emailData.append('subject', 'I need a quote')
    emailData.append(
      'message_body',
      `Nome: ${data.name}\nCelular: ${data.phone}\nEmail: ${data.emailAddress}\nCarYear: ${data.carYear}\nVinNumber: ${data.Vin}\nMake: ${data.make}\nModel: ${data.model}\nCarGlass: ${data.carGlass}`
    )
    emailData.append('check_status', '1')

    // const email = `Nome: ${data.name}\nCelular: ${data.phone}\nEmail: ${data.emailAddress}\nCarYear: ${data.carYear}\nVinNumber: ${data.Vin}\nMake: ${data.make}\nModel: ${data.model}\nCarGlass: ${data.carGlass}`
    // console.log(data)

    // const emailData = {
    //   apiId: apiId,
    //   apiTemplate: apiTemplate,
    //   apikey: apiKey,
    //   to: 'bianca.raiane18@gmail.com',
    //   subject: 'I need a quote',
    //   from: `${data.emailAddress}`,
    //   message_body: email,
    //   check_status: '1'
    // }

    // const emailData = {
    //   apikey: apiKey,
    //   to: 'bianca.raiane18@gmail.com',
    //   subject: 'I need a quote',
    //   content: {
    //     Body: [
    //       {
    //         Type: 'text/plain',
    //         Content: email
    //       }
    //     ],
    //     Attachments: ['preuploaded.jpg']
    //   }
    // }

    await axios.post(apiUrl, emailData)

    alert('Message sent successfully!')
  } catch (error) {
    alert('Error sending the message. Please try again.')
    console.error(error)
  }
}

export default sendEmails
