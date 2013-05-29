
function CreateFileRefs()
{
var fr=new Array();
            
fr[1]=['CSD.xsd', 'csd_xsd.html'];
fr[2]=['Addresses', 'addresses.html'];
fr[3]=['entityID', 'entityid.html'];
fr[4]=['status', 'status.html'];
fr[5]=['type', 'type.html'];
fr[6]=['AddressLine', 'addressline.html'];
fr[7]=['addressType', 'addresstype.html'];
fr[8]=['ContactPoints', 'contactpoints.html'];
fr[9]=['contactPointEquipment', 'contactpointequipment.html'];
fr[10]=['contactPointPurpose', 'contactpointpurpose.html'];
fr[11]=['contactPointText', 'contactpointtext.html'];
fr[12]=['contactPointType', 'contactpointtype.html'];
fr[13]=['encryptioinCertificate', 'encryptioincertificate.html'];
fr[14]=['entityID', 'entityid1.html'];
fr[15]=['status', 'status1.html'];
fr[16]=['type', 'type1.html'];
fr[17]=['Credentials', 'credentials.html'];
fr[18]=['credentialDescription', 'credentialdescription.html'];
fr[19]=['credentialIssueDate', 'credentialissuedate.html'];
fr[20]=['credentialName', 'credentialname.html'];
fr[21]=['credentialNumber', 'credentialnumber.html'];
fr[22]=['credentialRenewalDate', 'credentialrenewaldate.html'];
fr[23]=['credentialType', 'credentialtype.html'];
fr[24]=['entityID', 'entityid2.html'];
fr[25]=['issuingAuthority', 'issuingauthority.html'];
fr[26]=['status', 'status2.html'];
fr[27]=['type', 'type2.html'];
fr[28]=['Facilities', 'facilities.html'];
fr[29]=['facilityAccessPoint', 'facilityaccesspoint.html'];
fr[30]=['facilityAddress', 'facilityaddress.html'];
fr[31]=['facilityAttribute', 'facilityattribute.html'];
fr[32]=['facilityContactPerson', 'facilitycontactperson.html'];
fr[33]=['facilityGeocode', 'facilitygeocode.html'];
fr[34]=['facilityID', 'facilityid.html'];
fr[35]=['facilityLanguage', 'facilitylanguage.html'];
fr[36]=['facilityName', 'facilityname.html'];
fr[37]=['facilityOperatingHours', 'facilityoperatinghours.html'];
fr[38]=['facilityOrgParent', 'facilityorgparent.html'];
fr[39]=['facilityOtherName', 'facilityothername.html'];
fr[40]=['facilityProvider', 'facilityprovider.html'];
fr[41]=['facilityID', 'facilityid1.html'];
fr[42]=['provider', 'provider.html'];
fr[43]=['facilityRecordCreationDate', 'facilityrecordcreationdate.html'];
fr[44]=['facilityRecordLastUpdate', 'facilityrecordlastupdate.html'];
fr[45]=['facilityService', 'facilityservice.html'];
fr[46]=['facilityID', 'facilityid2.html'];
fr[47]=['facilityServiceFreeBusyKey', 'facilityservicefreebusykey.html'];
fr[48]=['facilityID', 'facilityid3.html'];
fr[49]=['facilityServiceFreeBusyAttendee', 'facilityservicefreebusyattendee.html'];
fr[50]=['FreeBusyURI', 'freebusyuri.html'];
fr[51]=['serviceID', 'serviceid.html'];
fr[52]=['facilityServiceLanguage', 'facilityservicelanguage.html'];
fr[53]=['facilityServiceName', 'facilityservicename.html'];
fr[54]=['facilityServiceOperatingHours', 'facilityserviceoperatinghours.html'];
fr[55]=['facilityServiceOrg', 'facilityserviceorg.html'];
fr[56]=['facilityServiceProvider', 'facilityserviceprovider.html'];
fr[57]=['facilityID', 'facilityid4.html'];
fr[58]=['facilityServiceProviderFreeBusyKey', 'facilityserviceproviderfreebusykey.html'];
fr[59]=['facilityID', 'facilityid5.html'];
fr[60]=['facilityServiceProviderFreeBusyAttendee', 'facilityserviceproviderfreebusyattendee.html'];
fr[61]=['FreeBusyURI', 'freebusyuri1.html'];
fr[62]=['providerID', 'providerid.html'];
fr[63]=['serviceID', 'serviceid1.html'];
fr[64]=['facilityServiceProviderOperatingHours', 'facilityserviceprovideroperatinghours.html'];
fr[65]=['providerID', 'providerid1.html'];
fr[66]=['serviceID', 'serviceid2.html'];
fr[67]=['serviceID', 'serviceid3.html'];
fr[68]=['facilityStatus', 'facilitystatus.html'];
fr[69]=['facilityType', 'facilitytype.html'];
fr[70]=['facilityTypeDescription', 'facilitytypedescription.html'];
fr[71]=['otherFacilityID', 'otherfacilityid.html'];
fr[72]=['Geocodes', 'geocodes.html'];
fr[73]=['altitude', 'altitude.html'];
fr[74]=['coordinateSystem', 'coordinatesystem.html'];
fr[75]=['entityID', 'entityid3.html'];
fr[76]=['latitude', 'latitude.html'];
fr[77]=['longitude', 'longitude.html'];
fr[78]=['status', 'status3.html'];
fr[79]=['type', 'type3.html'];
fr[80]=['Identifiers', 'identifiers.html'];
fr[81]=['entityID', 'entityid4.html'];
fr[82]=['issuingAuthority', 'issuingauthority1.html'];
fr[83]=['otherID', 'otherid.html'];
fr[84]=['status', 'status4.html'];
fr[85]=['type', 'type4.html'];
fr[86]=['Languages', 'languages.html'];
fr[87]=['entityID', 'entityid5.html'];
fr[88]=['languageCode', 'languagecode.html'];
fr[89]=['languageDescription', 'languagedescription.html'];
fr[90]=['status', 'status5.html'];
fr[91]=['type', 'type5.html'];
fr[92]=['Names', 'names.html'];
fr[93]=['CommonName', 'commonname.html'];
fr[94]=['entityID', 'entityid6.html'];
fr[95]=['foreName', 'forename.html'];
fr[96]=['honorific', 'honorific.html'];
fr[97]=['otherNames', 'othernames.html'];
fr[98]=['status', 'status6.html'];
fr[99]=['suffix', 'suffix.html'];
fr[100]=['surName', 'surname.html'];
fr[101]=['type', 'type6.html'];
fr[102]=['OperatingHours', 'operatinghours.html'];
fr[103]=['beginEffectiveDate', 'begineffectivedate.html'];
fr[104]=['beginningHour', 'beginninghour.html'];
fr[105]=['dayOfTheWeek', 'dayoftheweek.html'];
fr[106]=['endEffectiveDate', 'endeffectivedate.html'];
fr[107]=['endingHour', 'endinghour.html'];
fr[108]=['entityID', 'entityid7.html'];
fr[109]=['openFlag', 'openflag.html'];
fr[110]=['status', 'status7.html'];
fr[111]=['type', 'type7.html'];
fr[112]=['Organizations', 'organizations.html'];
fr[113]=['orgAdminAddress', 'orgadminaddress.html'];
fr[114]=['orgContactPerson', 'orgcontactperson.html'];
fr[115]=['orgContactPoint', 'orgcontactpoint.html'];
fr[116]=['orgCredential', 'orgcredential.html'];
fr[117]=['orgID', 'orgid.html'];
fr[118]=['orgLanguage', 'orglanguage.html'];
fr[119]=['orgParent', 'orgparent.html'];
fr[120]=['orgPrimaryName', 'orgprimaryname.html'];
fr[121]=['orgRecordCreationDate', 'orgrecordcreationdate.html'];
fr[122]=['orgRecordLastUpdate', 'orgrecordlastupdate.html'];
fr[123]=['orgSpecialization', 'orgspecialization.html'];
fr[124]=['orgType', 'orgtype.html'];
fr[125]=['orgTypeDescription', 'orgtypedescription.html'];
fr[126]=['otherName', 'othername.html'];
fr[127]=['otherOrgID', 'otherorgid.html'];
fr[128]=['Persons', 'persons.html'];
fr[129]=['contactPoint', 'contactpoint.html'];
fr[130]=['entityID', 'entityid8.html'];
fr[131]=['Name', 'name.html'];
fr[132]=['personAddress', 'personaddress.html'];
fr[133]=['personGender', 'persongender.html'];
fr[134]=['status', 'status8.html'];
fr[135]=['type', 'type8.html'];
fr[136]=['Providers', 'providers.html'];
fr[137]=['otherProviderID', 'otherproviderid.html'];
fr[138]=['providerCredential', 'providercredential.html'];
fr[139]=['providerDemographic', 'providerdemographic.html'];
fr[140]=['providerFacility', 'providerfacility.html'];
fr[141]=['facilityID', 'facilityid6.html'];
fr[142]=['providerID', 'providerid2.html'];
fr[143]=['providerFacilityService', 'providerfacilityservice.html'];
fr[144]=['facilityID', 'facilityid7.html'];
fr[145]=['providerID', 'providerid3.html'];
fr[146]=['serviceID', 'serviceid4.html'];
fr[147]=['providerID', 'providerid4.html'];
fr[148]=['providerLanguage', 'providerlanguage.html'];
fr[149]=['providerOrg', 'providerorg.html'];
fr[150]=['orgID', 'orgid1.html'];
fr[151]=['providerID', 'providerid5.html'];
fr[152]=['providerRecordCreationDate', 'providerrecordcreationdate.html'];
fr[153]=['providerRecordLastUpdate', 'providerrecordlastupdate.html'];
fr[154]=['providerSpecialty', 'providerspecialty.html'];
fr[155]=['providerStatus', 'providerstatus.html'];
fr[156]=['providerType', 'providertype.html'];
fr[157]=['providerTypeDescription', 'providertypedescription.html'];
fr[158]=['Services', 'services.html'];
fr[159]=['serviceDescription', 'servicedescription.html'];
fr[160]=['serviceID', 'serviceid5.html'];
fr[161]=['serviceType', 'servicetype.html'];
fr[162]=['status', 'status9.html'];
fr[163]=['type', 'type9.html'];
fr[164]=['Specializations', 'specializations.html'];
fr[165]=['entityID', 'entityid9.html'];
fr[166]=['specializationCode', 'specializationcode.html'];
fr[167]=['specializationDescription', 'specializationdescription.html'];
fr[168]=['status', 'status10.html'];
fr[169]=['type', 'type10.html'];
fr[170]=['ValuePairs', 'valuepairs.html'];
fr[171]=['AttributeDate', 'attributedate.html'];
fr[172]=['AttributeNumeric', 'attributenumeric.html'];
fr[173]=['AttributeText', 'attributetext.html'];
fr[174]=['attributeRequired', 'attributerequired.html'];
fr[175]=['attributeType', 'attributetype.html'];
fr[176]=['entityID', 'entityid10.html'];
fr[177]=['FacilityDirectory', 'facilitydirectory.html'];
fr[178]=['facility', 'facility.html'];
fr[179]=['FreeBusyService', 'freebusyservice.html'];
fr[180]=['freeBusyResult', 'freebusyresult.html'];
fr[181]=['DTEND', 'dtend.html'];
fr[182]=['DTSTART', 'dtstart.html'];
fr[183]=['DURATION', 'duration.html'];
fr[184]=['facilityID', 'facilityid8.html'];
fr[185]=['FREEBUSY', 'freebusy.html'];
fr[186]=['providerID', 'providerid6.html'];
fr[187]=['serviceID', 'serviceid6.html'];
fr[188]=['OrganizationDirectory', 'organizationdirectory.html'];
fr[189]=['organization', 'organization.html'];
fr[190]=['ProviderDirectory', 'providerdirectory.html'];
fr[191]=['provider', 'provider1.html'];
fr[192]=['ServiceDirectory', 'servicedirectory.html'];
fr[193]=['service', 'service.html'];    
 return fr;          
}

function CreateWordIndex()
{
var w=[
            
['--created',[1]],
['with',[1]],
['liquid',[1]],
['designer',[1]],
['edition',[1]],
['trial',[1]],
['http',[1]],
['liquid-technologies',[1]],
['schema',[1]],
['elementformdefault',[1]],
['qualified',[1]],
['xmlns',[1]],
['xmlschema',[1]],
['complextype',[1,2,6,8,17,28,40,45,47,56,58,72,80,86,92,102,112,128,136,140,143,149,158,164,170,177,179,180,188,190,192]],
['name',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193]],
['organizations',[1,112,188,189]],
['sequence',[1,2,8,17,28,40,45,47,56,58,72,80,86,92,102,112,128,136,158,164,170,177,179,180,188,190,192]],
['element',[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193]],
['orgid',[1,112,117,136,149,150,189]],
['type',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193]],
['otherorgid',[1,112,127,189]],
['identifiers',[1,28,71,80,112,127,136,137]],
['minoccurs',[1,2,4,5,8,9,10,13,15,16,17,18,19,22,25,26,27,28,30,31,32,33,39,40,45,47,52,53,54,55,56,58,64,71,72,73,74,78,79,80,82,84,85,86,89,90,91,92,95,96,97,98,99,100,101,102,110,111,112,113,114,116,119,123,126,127,128,129,132,133,134,135,136,137,138,140,143,154,158,159,162,163,164,167,168,169,177,178,179,180,181,186,188,189,190,191,192,193]],
['maxoccurs',[1,2,6,28,29,30,31,32,35,37,38,39,40,45,52,53,54,56,71,112,113,114,115,116,118,123,126,127,128,129,131,132,136,137,138,140,143,148,149,154,177,178,179,180,188,189,190,191,192,193]],
['unbounded',[1,2,6,28,29,30,31,32,35,37,38,39,40,45,52,53,54,56,71,112,113,114,115,116,118,123,126,127,128,129,131,132,136,137,138,139,140,143,148,149,154,177,178,179,180,188,189,190,191,192,193]],
['orgtype',[1,112,124,189]],
['string',[1,2,4,5,6,7,8,9,10,11,12,13,15,16,17,18,20,21,23,25,26,27,28,36,45,47,49,50,56,58,60,61,68,69,70,72,74,79,80,82,83,84,85,86,88,89,90,91,92,93,95,96,97,98,99,100,101,102,110,111,112,120,124,125,128,133,134,135,136,155,156,157,158,159,161,162,163,164,166,167,168,169,170,173,175,179,180,181,182,183,185]],
['orgtypedescription',[1,112,125,189]],
['orgprimaryname',[1,112,120,189]],
['othername',[1,112,126,189]],
['names',[1,28,39,45,53,92,112,126,128,131]],
['orgcontactperson',[1,112,114,189]],
['persons',[1,28,32,112,114,128,136,139]],
['orgadminaddress',[1,112,113,189]],
['addresses',[1,2,28,30,112,113,128,132]],
['orgcredential',[1,112,116,189]],
['credentials',[1,17,112,116,136,138]],
['orglanguage',[1,112,118,189]],
['languages',[1,28,35,45,52,86,112,118,136,148]],
['orgspecialization',[1,112,123,189]],
['specializations',[1,112,123,136,154,164]],
['orgcontactpoint',[1,112,115,189]],
['contactpoints',[1,8,28,29,112,115,128,129]],
['orgparent',[1,112,119,189]],
['orgrecordcreationdate',[1,112,121,189]],
['datetime',[1,28,43,44,112,121,122,136,152,153]],
['orgrecordlastupdate',[1,112,122,189]],
['facilities',[1,28,177,178]],
['facilityid',[1,28,34,40,41,45,46,47,48,56,57,58,59,136,140,141,143,144,178,179,180,184]],
['otherfacilityid',[1,28,71,178]],
['facilitytype',[1,28,69,178]],
['facilitytypedescription',[1,28,70,178]],
['facilitystatus',[1,28,68,178]],
['facilityname',[1,28,36,178]],
['facilityothername',[1,28,39,178]],
['facilityaddress',[1,28,30,178]],
['facilitycontactperson',[1,28,32,178]],
['facilitygeocode',[1,28,33,178]],
['geocodes',[1,28,33,72]],
['facilityattribute',[1,28,31,178]],
['valuepairs',[1,28,31,170]],
['facilitylanguage',[1,28,35,178]],
['facilityaccesspoint',[1,28,29,178]],
['facilityorgparent',[1,28,38,178]],
['facilityoperatinghours',[1,28,37,178]],
['operatinghours',[1,28,37,45,54,56,64,102]],
['facilityservice',[1,28,45,178]],
['serviceid',[1,28,45,47,51,56,58,63,66,67,136,143,146,158,160,179,180,187,193]],
['facilityserviceorg',[1,28,45,55]],
['facilityservicename',[1,28,45,53]],
['facilityservicelanguage',[1,28,45,52]],
['facilityserviceoperatinghours',[1,28,45,54]],
['facilityservicefreebusykey',[1,28,45,47]],
['freebusyuri',[1,28,45,47,50,56,58,61]],
['facilityservicefreebusyattendee',[1,28,45,47,49]],
['facilityserviceprovider',[1,28,45,56]],
['providerid',[1,28,45,56,58,62,65,136,140,142,143,145,147,149,151,179,180,186,191]],
['facilityserviceprovideroperatinghours',[1,28,45,56,64]],
['facilityserviceproviderfreebusykey',[1,28,45,56,58]],
['facilityserviceproviderfreebusyattendee',[1,28,45,56,58,60]],
['facilityprovider',[1,28,40,178]],
['provider',[1,28,40,42,190,191]],
['facilityrecordcreationdate',[1,28,43,178]],
['facilityrecordlastupdate',[1,28,44,178]],
['providers',[1,136,190,191]],
['otherproviderid',[1,136,137,191]],
['providertype',[1,136,156,191]],
['providertypedescription',[1,136,157,191]],
['providerstatus',[1,136,155,191]],
['providerdemographic',[1,136,139,191]],
['providerlanguage',[1,136,148,191]],
['providerorg',[1,136,149,191]],
['providerfacility',[1,136,140,191]],
['providerfacilityservice',[1,136,143,191]],
['providercredential',[1,136,138,191]],
['providerspecialty',[1,136,154,191]],
['providerrecordcreationdate',[1,136,152,191]],
['providerrecordlastupdate',[1,136,153,191]],
['entityid',[1,2,3,8,14,17,24,29,30,31,32,33,35,37,39,52,53,54,64,71,72,75,80,81,86,87,92,94,102,108,113,114,115,116,118,123,126,127,128,129,130,131,132,137,138,139,148,154,164,165,170,176]],
['otherid',[1,71,80,83,127,137]],
['issuingauthority',[1,17,25,71,80,82,116,127,137,138]],
['status',[1,2,4,8,15,17,26,29,30,32,33,35,37,39,52,53,54,64,71,72,78,80,84,86,90,92,98,102,110,113,114,115,116,118,123,126,127,128,129,131,132,134,137,138,139,148,154,158,162,164,168,193]],
['commonname',[1,39,53,92,93,126,131]],
['honorific',[1,39,53,92,96,126,131]],
['forename',[1,39,53,92,95,126,131]],
['othernames',[1,39,53,92,97,126,131]],
['surname',[1,39,53,92,100,126,131]],
['suffix',[1,39,53,92,99,126,131]],
['contactpoint',[1,32,114,128,129,139]],
['personaddress',[1,32,114,128,132,139]],
['persongender',[1,32,114,128,133,139]],
['contactpointtype',[1,8,12,29,115,129]],
['contactpointequipment',[1,8,9,29,115,129]],
['contactpointpurpose',[1,8,10,29,115,129]],
['encryptioincertificate',[1,8,13,29,115,129]],
['contactpointtext',[1,8,11,29,115,129]],
['addressline',[1,2,6,30,113,132]],
['simplecontent',[1,2,6]],
['extension',[1,2,6]],
['base',[1,2,6]],
['attribute',[1,2,6,7]],
['addresstype',[1,2,6,7]],
['required',[1,2,6,7]],
['credentialtype',[1,17,23,116,138]],
['credentialname',[1,17,20,116,138]],
['credentialnumber',[1,17,21,116,138]],
['credentialdescription',[1,17,18,116,138]],
['credentialissuedate',[1,17,19,116,138]],
['date',[1,17,19,22,102,103,106,170,171]],
['credentialrenewaldate',[1,17,22,116,138]],
['specializationcode',[1,123,154,164,166]],
['specializationdescription',[1,123,154,164,167]],
['languagecode',[1,35,52,86,88,118,148]],
['languagedescription',[1,35,52,86,89,118,148]],
['latitude',[1,33,72,76]],
['decimal',[1,72,73,76,77,170,172]],
['longitude',[1,33,72,77]],
['altitude',[1,33,72,73]],
['coordinatesystem',[1,33,72,74]],
['attributetype',[1,31,170,175]],
['choice',[1,170]],
['attributetext',[1,31,170,173]],
['attributenumeric',[1,31,170,172]],
['attributedate',[1,31,170,171]],
['attributerequired',[1,31,170,174]],
['boolean',[1,102,109,170,174]],
['openflag',[1,37,54,64,102,109]],
['dayoftheweek',[1,37,54,64,102,105]],
['integer',[1,102,105]],
['beginninghour',[1,37,54,64,102,104]],
['time',[1,102,104,107]],
['endinghour',[1,37,54,64,102,107]],
['begineffectivedate',[1,37,54,64,102,103]],
['endeffectivedate',[1,37,54,64,102,106]],
['services',[1,158,192,193]],
['servicetype',[1,158,161,193]],
['servicedescription',[1,158,159,193]],
['organizationdirectory',[1,188]],
['organization',[1,188,189]],
['facilitydirectory',[1,177]],
['facility',[1,177,178]],
['servicedirectory',[1,192]],
['service',[1,192,193]],
['providerdirectory',[1,190]],
['freebusyservice',[1,179]],
['freebusyresult',[1,179,180]],
['dtstart',[1,179,180,182]],
['dtend',[1,179,180,181]],
['duration',[1,179,180,183]],
['freebusy',[1,179,180,185]],
['false',[2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193]],
['version',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193]],
['encoding',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193]],
['utf-16',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193]]
 ];
 return w;
}
        