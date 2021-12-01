import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
const PageOne = ({person}) => {
	const {petitionNo,
		deceasedName,
		deceasedAddress,
		deceasedOccupation,
		personName,
		personReligion,
		personIntionality,
		personAge,
        personAddress,
		throwDate,
		throwLanguage,
		throwAdditioan,
        believe,
		personOneName,
		credenceLocation,
		credenceDate,
}=person;
const months =["January","February","March","April","May","June","July","August","September","Outober","November","December"]
const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const newThrowDate =new Date(throwDate);
const newCredenceDate=new Date(credenceDate);
const thisYear = new Date().getFullYear();
const nth =(n)=>{
	switch(n){
		case 1:  return "st";
    	case 2:  return "nd";
    	case 3:  return "rd";
    	default: return "th";
	}
}
	return (
		<Document style={styles.body}>
      <Page style={styles.body}>
        <Text style={styles.header}> Form No. 102 </Text>
        <Text style={styles.header}> IN THE HIGH COURT OF JUDICATURE AT BOMBAY </Text>
        <Text style={styles.header}> TESTAMENTARY AND INTESTATE JURISDICTION </Text>
        <Text style={styles.header}> PETITION No {petitionNo} of {thisYear}</Text>
        
        <Text style={styles.title}>Petition for probate of last will and testament of {deceasedName} </Text>
        <Text style={styles.title}>resident of {deceasedAddress} </Text>
        <Text style={styles.title}>having occupation of {deceasedOccupation} Deceased. </Text>
        <Text style={styles.title}>{personName} Petitioner.</Text>

        <Text style={styles.text}>
        I, {personName}, {personReligion}, {personIntionality} Inhabitant of {personAge}, 
aged  about  {thisYear - personAge}  years,  residing  at  {personAddress} do {(believe)?` swaer in the name of God `:` solemnly affirm `}, and say as follows:
        </Text>
        <Text style={styles.text}>
          1{`)  `}That I knew and was well acquainted with the deceased {deceasedName} above named.
        </Text>
        <Text style={styles.text}>
        2{`)  `}That on the {days[newThrowDate.getDay()]}  {newThrowDate.getDate()}{nth(newThrowDate.getDate())} day of {months[newThrowDate.getMonth()]}  {newThrowDate.getFullYear()}, I was present together with {personOneName} 
        at the house of {deceasedName} and we did then and there see the said deceased 
        set and subscribe his name at foot of the testamentary paper in the {throwLanguage} language and character, 
        which is referred to in. the petition herein and marked Exhibit “....”, and declare and publish, 
        the same as his last Will and testament.
        </Text>
        <Text style={styles.text}>
        3{`)  `}That thereupon I, this deponent and the said {deceasedName} did at the request of the said 
        deceased and in his presence and in the presence of each other all being present at the same time
         set and subscribe our respective names and signatures at foot of the said testamentary paper as 
         witnesses thereto.
        </Text>

        <Text style={styles.text}>
        4{`)  `}That the name and signature {deceasedName} subscribed at the foot of the testamentary 
        paper as of the party executing the same is in the proper hand-writing of the said deceased and the name 
        and signature and additioans "{throwAdditioan}" also subscribed and written at foot of the said testamentary
        paper as of the parties attesting execution of the same are in the proper respective handwritings of 
        the said {deceasedName} and of me this deponent respectively.
        </Text>
        <Text style={styles.text}>
        5{`)  `}That at the time the said deceased so subscribed his name and signature to the said will as
         aforesaid, {deceasedName}, he was of sound and disposing mind, memory and 
         understanding and to the best of my belief made and published the name of his free will and pleasure.
        </Text>
        <Text style={styles.text}>
        {(believe)?` swaer in the name of God `:` solemnly affirm `} at {credenceLocation}	
        </Text>
        <Text style={styles.text}>
               this {days[newCredenceDate.getDay()]} {newCredenceDate.getDate()}{nth(newCredenceDate.getDate())} Day of  {months[newCredenceDate.getMonth()]}  {newCredenceDate.getFullYear()}  	
        </Text>
    
        <Text style={styles.title}>................................................. </Text>
        <Text style={styles.title}>Before Me </Text>

        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
	);
};

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingLeft: 50,
		paddingRight:50,
		leading: 2.0,
		marginLeft: '0.8rem'
	  },
	  title: {
		fontSize: 13,
		textAlign: 'right',
		font: 'Georgia',
		leading: 2.0,
		marginBottom: 13,
	  },
	  author: {
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 40,
	  },
	  subtitle: {
		fontSize: 18,
		margin: 12,
		//fontFamily: 'Oswald'
	  },
	  text: {
		fontSize: 13,
		font: 'Georgia',
		leading: 2.0,
		marginBottom: 13,
		textAlign: 'justify',
		lineHeight: 2,
		marginLeft: '1.5rem',
	  },
	  image: {
		marginVertical: 15,
		marginHorizontal: 100,
	  },
	  header: {
		fontSize: 13,
		marginBottom: 13,
		textAlign: 'center',
		color: 'black',
		font: 'Georgia',
		//leading: 2.0
	  },
	  pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	  },
});
export default PageOne;
