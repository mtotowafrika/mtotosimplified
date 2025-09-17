import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {
  constructor() {
    emailjs.init('HEtdKOx_AHbBIZQ1g');
  }

  public sendmessage(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message.",
      icon: "info",
      allowOutsideClick: false,
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        Swal.showLoading(null);
      },
    });

    const serviceID = "service_tb3cck8";
    const templateID = "template_7pjxp4r";

    emailjs.sendForm(serviceID, templateID, form)
      .then((res: EmailJSResponseStatus) => {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent.",
          icon: "success",
          confirmButtonText: "OK",
        });
        form.reset();
      }, (err) => {
        console.error("Error occurred:", err);
        const errorMessage = err.text || "An unknown error occurred. Please try again later.";
        Swal.fire({
          title: "Error!",
          text: `An error occurred: ${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }
}