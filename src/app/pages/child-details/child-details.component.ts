import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChildSponsorshipService } from '../../services/child-sponsorship.service';
import { Child } from '../../models/child.model';
import { CommonModule, Location } from '@angular/common';
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
    private childSponsorshipService: ChildSponsorshipService,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

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

  public showSponsorForm(childName: string): void {
    Swal.fire({
      html: `
            <h2 class="fw-bold h1">Sponsor ${childName}</h2>
            <p>Please fill out the form below to sponsor this child.</p>
            
            <form id="sponsor-form">
              <div class="form-group mb-3">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" class="form-control" required>
              </div>
              <div class="form-group mb-3">
                <label for="phone">Your Phone</label>
                <input type="tel" id="phone" name="phone" class="form-control" required>
              </div>
              <div class="form-group mb-3">
                <label for="email">Your Email</label>
                <input type="email" id="email" name="email" class="form-control" required>
              </div>
              <div class="form-group mb-3">
                <label for="childName">Sponsoring</label>
                <input type="text" id="childName" name="childName" value="${childName}" class="form-control" readonly>
              </div>
              <div class="form-group mb-3">
                <label for="message">Message (optional)</label>
                <textarea id="message" name="message" class="form-control" rows="5"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg" style="background-color: var(--red); border-color: var(--red);">Submit Sponsorship Inquiry</button>
              </div>
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
            this._sendSponsorshipInquiry(form as HTMLFormElement);
          });
        }
      },
    });
  }

  private _sendSponsorshipInquiry(form: HTMLFormElement): void {
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