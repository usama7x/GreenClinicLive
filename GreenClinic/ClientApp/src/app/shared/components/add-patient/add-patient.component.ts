import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { Patient } from 'app/views/patients/Models/Patient';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'app/views/patients/Services/patient.service';
import { DatePipe, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  };

  @ViewChild('scanElement', {static: false}) scanElement: ElementRef;
  scanContent = '';
  isEdit: boolean;
  patient: Patient;
  isFormSubmitted: boolean;
  scanControl = new FormControl();



  constructor(private toster: ToastrService,
              private patientService: PatientService,
              private changeDetector: ChangeDetectorRef,
              private datePipe: DatePipe,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private location: Location,
              private fuseProgressBar: FuseProgressBarService) {

                this.activeRoute.queryParams.subscribe(params => {
                  const patientId = params['id'];
                  if (patientId) {
                    this.isEdit = true;
                    this.patientService.getById(patientId).subscribe(x => {
                      this.patient = x;                      
                    });
                  } else {
                    this.isEdit = false;
                    this.patient = new Patient();
                  }
                  
                });
              }

  ngOnInit(): void {
    this.scanControl.valueChanges.pipe(debounceTime(500)).subscribe(x => {
      console.log(this.scanContent);
      this.assignedScanResult(this.scanContent);
      this.scanContent = '';
      this.changeDetector.detectChanges();
    });
    setTimeout(() => {
          this.scanElement.nativeElement.focus();
      },
      500);
  }

  onSavepatient(): void {
    this.isFormSubmitted = true;
    this.fuseProgressBar.show();
    this.patientService.updatePatient(this.patient).subscribe(res => {
      this.location.back();
      this.toster.success('Patient Saved', 'Success!', {progressBar: true});
    }, err => {
      console.log(err);
      this.toster.error('Saving Patient Failed', 'Error!', {progressBar: true});
    });
    this.fuseProgressBar.hide();
    this.changeDetector.detectChanges();
  }


  assignedScanResult(scanContent) {
    let scanResult = scanContent.split('\n');
    let firstName = scanResult.find(x => x.startsWith(ScanMap.FirstName) || x.startsWith(ScanMap.FirstName1) || x.startsWith(ScanMap.FirstName));
    let midName = scanResult.find(x => x.startsWith(ScanMap.MidName) || x.startsWith(ScanMap.MiddleName2) || x.startsWith(ScanMap.MiddleNameorInitial2));
    let lastName = scanResult.find(x => x.startsWith(ScanMap.LastName) || x.startsWith(ScanMap.LastName1) || x.startsWith(ScanMap.LastName2));
    let parentage = scanResult.find(x => x.startsWith(ScanMap.Parentage) || x.startsWith(ScanMap.PermitIdentifier));
    let phoneNo = scanResult.find(x => x.startsWith(ScanMap.PhoneNo));
    let weight = scanResult.find(x => x.startsWith(ScanMap.Weight));
    let age = scanResult.find(x => x.startsWith(ScanMap.Age));
    let address = scanResult.find(x => x.startsWith(ScanMap.Address));
  

    if (firstName) {
        this.patient.firstName = firstName.substr(3);
    }
    if (midName) {
        this.patient.midName = midName.substr(3);
    }
    if (lastName) {
        this.patient.lastName = lastName.substr(3);
    }   
    if (parentage) {
        this.patient.parentage = parentage.substr(3);
    }
    if (address) {
        this.patient.address = address.substr(3);
    }
    if (age) {
        this.patient.age = age.substr(3);
    }
    if (weight) {
        this.patient.weight = age.substr(3);        
    }
    if (phoneNo) {
      this.patient.phoneNo = phoneNo.substr(3);
    }
  
    }

    navigateToPreviousPage(): void {
      this.location.back();
  }

}


export class ScanMap {
  public static FullName1 = 'DAA';
  public static LastName1 = 'DAB';
  public static FamilyName1 = 'DAB';
  public static FirstName1 = 'DAC';
  public static GivenName1 = 'DAC';
  public static MidName = 'DAD';
  public static MiddleName1 = 'DAD';
  public static NameSuffix1 = 'DAE';
  public static NamePrefix = 'DAF';
  public static MailingStreetAddress1 = 'DAG';
  public static MailingStreetAddress2 = 'DAH';
  public static MailingCity = 'DAI';
  public static MailingJurisdictionCode = 'DAJ';
  public static MailingPostalCode = 'DAK';
  public static ResidenceStreetAddress1 = 'DAL';
  public static ResidenceStreetAddress2 = 'DAM';
  public static ResidenceCity = 'DAN';
  public static ResidenceJurisdictionCode = 'DAO';
  public static ResidencePostalCode = 'DAP';
  public static LicenseorIDNumber = 'DAQ';
  public static LicenseClassificationCode = 'DAR';
  public static LicenseRestrictionCode = 'DAS';
  public static LicenseEndorsementsCode = 'DAT';
  public static HeightinFT_IN = 'DAU';
  public static HeightinCM = 'DAV';
  public static WeightinLBS = 'DAW';
  public static WeightinKG = 'DAX';
  public static EyeColor = 'DAY';
  public static HairColor = 'DAZ';
  public static LicenseExpirationDate = 'DBA';
  public static DateofBirth = 'DBB';
  public static Sex = 'DBC';
  public static LicenseorIDDocumentIssueDate = 'DBD';
  public static IssueTimestamp = 'DBE';
  public static NumberofDuplicates = 'DBF';
  public static MedicalIndicatorCodes = 'DBG';
  public static OrganDonor = 'DBH';
  public static NonResidentIndicator = 'DBI';
  public static UniqueCustomerIdentifier = 'DBJ';
  public static SocialSecurityNumber1 = 'DBK';
  public static DateOfBirth = 'DBL';
  public static SocialSecurityNumber2 = 'DBM';
  public static FullName2 = 'DBN';
  public static LastName2 = 'DBO';
  public static FamilyName2 = 'DBO';
  public static FirstName2 = 'DBP';
  public static GivenName2 = 'DBP';
  public static MiddleName2 = 'DBQ';
  public static MiddleNameorInitial2 = 'DBQ';
  public static Suffix1 = 'DBR';
  public static Prefix = 'DBS';
  public static VirginiaSpecificClass = 'DCA';
  public static VirginiaSpecificRestrictions = 'DCB';
  public static VirginiaSpecificEndorsements = 'DCD';
  public static PhysicalDescriptionWeightRange = 'DCE';
  public static DocumentDiscriminator = 'DCF';
  public static Countryterritoryofissuance = 'DCG';
  public static FederalCommercialVehicleCodes = 'DCH';
  public static Placeofbirth = 'DCI';
  public static Auditinformation = 'DCJ';
  public static InventoryControlNumber = 'DCK';
  public static RaceEthnicity = 'DCL';
  public static Standardvehicleclassification = 'DCM';
  public static Standardendorsementcode = 'DCN';
  public static Standardrestrictioncode = 'DCO';
  public static Jurisdictionspecificvehicleclassificationdescription = 'DCP';
  public static JurisdictionSpecific = 'DCQ';
  public static Jurisdictionspecificrestrictioncodedescription = 'DCR';
  public static FamilyName = 'DCS';
  public static LastName = 'DCS';
  public static GivenName = 'DCT';
  public static FirstName = 'DCT';
  public static Suffix = 'DCU';
  public static ComplianceType = 'DDA';
  public static CardRevisionDate = 'DDB';
  public static HazMatEndorsementExpiryDate = 'DDC';
  public static LimitedDurationDocumentIndicator = 'DDD';
  public static FamilyNameTruncation = 'DDE';
  public static FirstNamesTruncation = 'DDF';
  public static MiddleNamesTruncation = 'DDG';
  public static Under18Until = 'DDH';
  public static Under19Until = 'DDI';
  public static Under21Until = 'DDJ';
  public static OrganDonorIndicator = 'DDK';
  public static VeteranIndicator = 'DDL';
  public static PermitClassificationCode = 'PAA';
  public static PermitExpirationDate = 'PAB';
  public static PermitIdentifier = 'PAC';
  public static PermitIssueDate = 'PAD';
  public static PermitRestrictionCode = 'PAE';
  public static PermitEndorsementCode = 'PAF';
  public static CourtRestrictionCode = 'ZVA';
  public static Parentage = 'ZVB';
  public static Weight = 'ZVC';
  public static Age = 'ZVD';
  public static Address = 'ZVE';
  public static PhoneNo = 'ZVF';

}

