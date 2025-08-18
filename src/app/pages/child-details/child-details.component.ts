import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChildSponsorshipService } from '../../services/child-sponsorship.service';
import { Child } from '../../models/child.model';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-child-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit {
  child: Child | undefined;
  childId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private childSponsorshipService: ChildSponsorshipService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.childId = params.get('id');
      if (this.childId) {
        this.childSponsorshipService.getChildren().subscribe(children => {
          this.child = children.find(c => c.id === this.childId);
        });
      }
    });
  }

  public contact(childName: string): void {
    Swal.fire({
      html: `
            <h2 class="fw-bold h1">Sponsor ${childName}</h2>
            <p>Please fill out the form below to sponsor this child.</p>
            
            <form id="sponsor-form">
              <div class="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" class="form-control mb-2" required>
              </div>
              <div class="form-group">
                <input type="tel" id="phone" name="phone" class="form-control mb-2" placeholder="Your Phone" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" class="form-control mb-2" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <input type="text" id="childName" name="childName" value="${childName}" class="form-control mb-2" readonly>
              </div>
              <div class="form-group">
                <textarea id="message" name="message" placeholder="Your Message (optional)" class="form-control mb-2" rows="4"></textarea>
              </div>
              <button type="submit" class="btn btn-dark mt-3">Submit Sponsorship Inquiry</button>
            </form>
          `,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      didOpen: () => {
        const form = document.getElementById("sponsor-form");
        if (form) {
          form.addEventListener("submit", (e: Event) => {
            e.preventDefault();
            this.sendSponsorshipInquiry(form as HTMLFormElement);
          });
        }
      },
    });
  }

  private sendSponsorshipInquiry(form: HTMLFormElement): void {
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your sponsorship inquiry.",
      icon: "info",
      allowOutsideClick: false,
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        Swal.showLoading(null);
      },
    });

    const serviceID = "service_tb3cck8"; // Replace with your EmailJS service ID
    const templateID = "template_7pjxp4r"; // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, form)
      .then((res: EmailJSResponseStatus) => {
        Swal.fire({
          title: "Success!",
          text: "Your sponsorship inquiry has been sent. We will get back to you shortly.",
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