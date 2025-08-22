"use client";

import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import doc1 from "@/Images/doc1.jpg";
import doc2 from "@/Images/doc2.jpg";
import doc3 from "@/Images/doc3.jpg";
import doc4 from "@/Images/doc4.jpg";
import doc5 from "@/Images/doc5.jpg";
import doc6 from "@/Images/doc6.jpg";
import doc7 from "@/Images/doc7.jpg";
import doc8 from "@/Images/doc8.jpg";
import doc9 from "@/Images/doc9.jpg";
import doc10 from "@/Images/doc10.jpg";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  degree: string;
  phone: string;
  email: string;
  chamberAddress: string;
  hospital: string;
  experience: string;
  consultationFee: string;
  availability: string;
  image: StaticImageData;
};

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Endocrinologist & Diabetologist",
    degree: "MBBS, MD (Endocrinology), FRCP",
    phone: "+1 (555) 123-4567",
    email: "dr.sarah.johnson@diabetescare.com",
    chamberAddress: "123 Medical Plaza, Suite 401, Downtown Medical Center, New York, NY 10001",
    hospital: "Mount Sinai Hospital",
    experience: "15+ years",
    consultationFee: "$150",
    availability: "Mon-Fri: 9AM-5PM, Sat: 9AM-1PM",
    image: doc1,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Internal Medicine & Diabetes Specialist",
    degree: "MBBS, MD (Internal Medicine), FACP",
    phone: "+1 (555) 234-5678",
    email: "dr.michael.chen@healthcare.com",
    chamberAddress: "456 Health Street, Medical Building A, Floor 3, Los Angeles, CA 90210",
    hospital: "Cedars-Sinai Medical Center",
    experience: "12+ years",
    consultationFee: "$140",
    availability: "Mon-Thu: 8AM-6PM, Fri: 8AM-2PM",
    image: doc2,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Family Medicine & Diabetes Care",
    degree: "MBBS, MD (Family Medicine), FAAFP",
    phone: "+1 (555) 345-6789",
    email: "dr.emily.rodriguez@familycare.com",
    chamberAddress: "789 Wellness Avenue, Medical Complex, Suite 205, Miami, FL 33101",
    hospital: "Jackson Memorial Hospital",
    experience: "10+ years",
    consultationFee: "$120",
    availability: "Mon-Fri: 8AM-4PM, Sat: 9AM-12PM",
    image: doc3,
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Cardiologist & Diabetes Management",
    degree: "MBBS, MD (Cardiology), FACC",
    phone: "+1 (555) 456-7890",
    email: "dr.james.wilson@cardiac.com",
    chamberAddress: "321 Heart Center Drive, Medical Tower, Floor 5, Chicago, IL 60601",
    hospital: "Northwestern Memorial Hospital",
    experience: "18+ years",
    consultationFee: "$180",
    availability: "Mon-Fri: 9AM-6PM",
    image: doc4,
  },
  {
    id: "5",
    name: "Dr. Lisa Thompson",
    specialty: "Nutritionist & Diabetes Educator",
    degree: "MBBS, MD (Nutrition), RD, CDE",
    phone: "+1 (555) 567-8901",
    email: "dr.lisa.thompson@nutrition.com",
    chamberAddress: "654 Nutrition Lane, Health Plaza, Suite 102, Boston, MA 02101",
    hospital: "Massachusetts General Hospital",
    experience: "8+ years",
    consultationFee: "$100",
    availability: "Mon-Fri: 10AM-6PM, Sat: 10AM-2PM",
    image: doc5,
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    specialty: "Endocrinologist & Metabolic Specialist",
    degree: "MBBS, MD (Endocrinology), PhD",
    phone: "+1 (555) 678-9012",
    email: "dr.robert.kim@endocrine.com",
    chamberAddress: "987 Medical Center Blvd, Professional Building, Floor 4, Houston, TX 77001",
    hospital: "Texas Medical Center",
    experience: "20+ years",
    consultationFee: "$160",
    availability: "Mon-Thu: 8AM-5PM, Fri: 8AM-3PM",
    image: doc6,
  },
  {
    id: "7",
    name: "Dr. Amanda Davis",
    specialty: "Pediatric Endocrinologist",
    degree: "MBBS, MD (Pediatrics), Pediatric Endocrinology Fellowship",
    phone: "+1 (555) 789-0123",
    email: "dr.amanda.davis@pediatric.com",
    chamberAddress: "147 Children&apos;s Medical Drive, Pediatric Center, Suite 301, Seattle, WA 98101",
    hospital: "Seattle Children&apos;s Hospital",
    experience: "14+ years",
    consultationFee: "$170",
    availability: "Mon-Fri: 9AM-5PM",
    image: doc7,
  },
  {
    id: "8",
    name: "Dr. David Martinez",
    specialty: "Internal Medicine & Geriatric Diabetes",
    degree: "MBBS, MD (Internal Medicine), Geriatric Fellowship",
    phone: "+1 (555) 890-1234",
    email: "dr.david.martinez@geriatric.com",
    chamberAddress: "258 Senior Care Avenue, Medical Complex, Floor 2, Phoenix, AZ 85001",
    hospital: "Mayo Clinic Arizona",
    experience: "16+ years",
    consultationFee: "$145",
    availability: "Mon-Fri: 8AM-4PM, Sat: 9AM-1PM",
    image: doc8,
  },
  {
    id: "9",
    name: "Dr. Jennifer Lee",
    specialty: "Diabetes & Wound Care Specialist",
    degree: "MBBS, MD (Internal Medicine), Wound Care Certification",
    phone: "+1 (555) 901-2345",
    email: "dr.jennifer.lee@woundcare.com",
    chamberAddress: "369 Wound Care Center, Medical Plaza, Suite 150, Denver, CO 80201",
    hospital: "University of Colorado Hospital",
    experience: "11+ years",
    consultationFee: "$155",
    availability: "Mon-Fri: 9AM-6PM",
    image: doc9,
  },
  {
    id: "10",
    name: "Dr. Thomas Anderson",
    specialty: "Endocrinologist & Research Specialist",
    degree: "MBBS, MD (Endocrinology), PhD (Diabetes Research)",
    phone: "+1 (555) 012-3456",
    email: "dr.thomas.anderson@research.com",
    chamberAddress: "741 Research Medical Drive, Innovation Center, Floor 6, San Francisco, CA 94101",
    hospital: "UCSF Medical Center",
    experience: "22+ years",
    consultationFee: "$200",
    availability: "Mon-Thu: 9AM-5PM, Fri: 9AM-2PM",
    image: doc10,
  },
];

export default function DietDoctorsHelpPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingType, setBookingType] = useState<"online" | "offline" | null>(null);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [confirmedDoctorName, setConfirmedDoctorName] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<string>("");
  const [bookingTime, setBookingTime] = useState<string>("9:00 AM");
  const [patientPhone, setPatientPhone] = useState<string>("");

  const handleBooking = (doctor: Doctor, type: "online" | "offline") => {
    setSelectedDoctor(doctor);
    setBookingType(type);
    setShowBookingModal(true);
    // Reset form fields
    setBookingDate("");
    setBookingTime("9:00 AM");
    setPatientPhone("");
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setSelectedDoctor(null);
    setBookingType(null);
    // Reset form fields
    setBookingDate("");
    setBookingTime("9:00 AM");
    setPatientPhone("");
  };

  const confirmBooking = () => {
    if (selectedDoctor) {
      setConfirmedDoctorName(selectedDoctor.name);
    }
    setShowBookingModal(false);
    setShowThankYouPopup(true);
    setSelectedDoctor(null);
    setBookingType(null);
    // Reset form fields
    setBookingDate("");
    setBookingTime("9:00 AM");
    setPatientPhone("");
  };

  const closeThankYouPopup = () => {
    setShowThankYouPopup(false);
    setConfirmedDoctorName("");
  };

  // Check if online booking form is valid
  const isOnlineBookingValid = bookingDate && patientPhone.trim().length > 0;

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">Expert Care</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
          <span className="text-gradient-animation">Doctor&apos;s Help</span> for Diabetes
        </h1>
      </div>
      
      <p className="mt-3 text-base sm:text-lg text-foreground/80 max-w-3xl">
        Connect with experienced diabetes specialists and endocrinologists for personalized care, medication management, and comprehensive treatment plans.
      </p>

      {/* Doctor Cards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="card-lift rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 hover:bg-primary/5 transition-colors">
            {/* Doctor Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="size-16 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-sky-300/20 flex items-center justify-center">
                <Image 
                  src={doctor.image} 
                  alt={`${doctor.name} - ${doctor.specialty}`} 
                  width={64} 
                  height={64} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                <p className="text-xs text-foreground/60 mt-1">{doctor.degree}</p>
              </div>
            </div>

            {/* Doctor Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-foreground/60">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-foreground/70">{doctor.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-foreground/60">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="text-foreground/70">{doctor.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-foreground/60">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-foreground/70">{doctor.hospital}</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
              <div className="bg-background/60 rounded-lg p-2">
                <div className="text-foreground/60">Experience</div>
                <div className="font-medium">{doctor.experience}</div>
              </div>
              <div className="bg-background/60 rounded-lg p-2">
                <div className="text-foreground/60">Consultation</div>
                <div className="font-medium">{doctor.consultationFee}</div>
              </div>
            </div>

            {/* Booking Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => handleBooking(doctor, "online")}
                className="flex-1 bg-primary text-primary-foreground text-sm font-medium py-2 px-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Online Booking
              </button>
              <button
                onClick={() => handleBooking(doctor, "offline")}
                className="flex-1 border border-primary text-primary text-sm font-medium py-2 px-3 rounded-lg hover:bg-primary/10 transition-colors"
              >
                Offline Booking
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Book Appointment</h3>
              <button
                onClick={closeModal}
                className="p-1 hover:bg-foreground/10 rounded"
                aria-label="Close booking modal"
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-medium">{selectedDoctor.name}</h4>
                <p className="text-sm text-foreground/70">{selectedDoctor.specialty}</p>
                <p className="text-xs text-foreground/60 mt-1">{selectedDoctor.degree}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Booking Type</label>
                  <div className="mt-1 p-3 bg-background/60 rounded-lg">
                    <span className="text-sm capitalize">{bookingType} Booking</span>
                  </div>
                </div>

                {bookingType === "online" ? (
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Preferred Date <span className="text-red-500">*</span></label>
                      <input
                        type="date"
                        className="mt-1 w-full rounded-lg border border-black/[.08] dark:border-white/[.12] bg-background/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                        aria-label="Preferred appointment date"
                        title="Select preferred date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        required
                      />
                      {!bookingDate && (
                        <p className="text-red-500 text-xs mt-1">Date is required</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium">Preferred Time</label>
                      <select 
                        className="mt-1 w-full rounded-lg border border-black/[.08] dark:border-white/[.12] bg-background/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                        aria-label="Preferred appointment time"
                        title="Select preferred time"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                      >
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Contact Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        className="mt-1 w-full rounded-lg border border-black/[.08] dark:border-white/[.12] bg-background/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                        aria-label="Contact number"
                        title="Enter your phone number"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        required
                      />
                      {!patientPhone.trim() && (
                        <p className="text-red-500 text-xs mt-1">Phone number is required</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Chamber Address</label>
                      <div className="mt-1 p-3 bg-background/60 rounded-lg text-sm text-foreground/70">
                        {selectedDoctor.chamberAddress}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Availability</label>
                      <div className="mt-1 p-3 bg-background/60 rounded-lg text-sm text-foreground/70">
                        {selectedDoctor.availability}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Contact for Appointment</label>
                      <div className="mt-1 p-3 bg-background/60 rounded-lg text-sm text-foreground/70">
                        {selectedDoctor.phone}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={closeModal}
                    className="flex-1 border border-black/[.12] dark:border-white/[.12] text-sm font-medium py-2 px-4 rounded-lg hover:bg-foreground/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmBooking}
                    className={`flex-1 text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                      bookingType === "online" 
                        ? isOnlineBookingValid
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    disabled={bookingType === "online" ? !isOnlineBookingValid : false}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYouPopup && (
        <div className="fixed inset-0 bg-blue-500/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-900">Appointment Confirmed!</h3>
              <button
                onClick={closeThankYouPopup}
                className="p-1 hover:bg-gray-200 rounded"
                aria-label="Close thank you popup"
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-blue-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="text-center">
              <p className="text-blue-900 text-lg font-medium mb-2">Your appointment with {confirmedDoctorName} has been confirmed!</p>
              <p className="text-blue-700 text-sm">
                We will contact you shortly to confirm the details.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


