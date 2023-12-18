// bind মেথড দিয়ে মুলত, একটি অবজেক্ট এর ভেতর যে মেথড/ফাংশন থাকবে। সেটাকে নতুন একটি অবজেক্ট এর মেথড হিসেবে সংযুক্ত/implement করে দেয়া। 
// ধরি, student = {} একটি অবজেক্ট, এটার ভেতর একটি মেথড আছে যার নাম হচ্ছে tuitionFee, এই tuitionFee মেথডটিকে আমরা চাইলে নতুন একটি অবজেক্ট এর মেথড হিসেবে যুক্ত করে। সে নতুন অবজেক্ট এর প্রপার্টির সাথে যুক্ত করে কাজ করাতে পারি। অর্থাৎ, একজনের থেকে জিনিস ধার করে, আরেকজনের কাজ করিয়ে নেয়া।
// bind করার সময় মেথড অনুযায়ী মেথডের প্যারামিটার এর ভ্যলু  বলে দিতে হয়। এটা মুলত একবার bind করে, তারপর মেথডের প্যারামিটার ভ্যালু দিতে হয়। সরাসরি প্যারামিটার ভ্যালু দিতে হলে সেক্ষেত্রে call ইউজ করা যায়। 
// bind structure : যে জায়গা থেকে মেথড নিব তার অবজেক্ট এর নাম.অবজেক্ট এর মেথডের নাম.bind(এখানে বলতে হবে যে bind হয়ে কার মেথডে এটি যুক্ত হয়ে যাবে)


const student = {
    firstName : 'Mohammad',
    lastName : 'Samad',
    scholarship : 12000,
    getFullName : function() {
        console.log(this.firstName, this.lastName);
    }, 
    tuitionFee : function(tiffinFee){
        //console.log(this);
        this.scholarship = this.scholarship - tiffinFee;
        return this.scholarship;
    } 
}

// const fullStudent = student; // Get the full object
// const studentBasicInfo = student.firstName; // Mohammad
//console.log(fullStudent);

// student.tuitionFee(1000); // (12000 - 1000 = 11000)
// student.tuitionFee(1000); // (11000 - 1000 = 10000)
// console.log(student.scholarship); 


const collegeStudent = {
    firstName : 'Enayet',
    lastName : 'Hossain',
    scholarship : 18000
}

const varsityStudent = {
    firstName : 'Karim',
    lastName : 'Uddin',
    scholarship : 5000
}


// Bind into new object 
// Structure : parentObject.objectMethod.bind(targeted object);

// const collegeStudentScholarship = student.tuitionFee.bind(collegeStudent);
// const varsityStudentScholarship = student.tuitionFee.bind(varsityStudent);
// console.log(varsityStudentScholarship(1000)); // (5000 - 1000 = 4000)

// console.log(student.tuitionFee(0)); // (12000 - 0 = 12000)

// console.log(collegeStudentScholarship(1000)); // (18000 - 1000 = 17000)









// call এর সাথে bind এর একটু তফাৎ আছে, 
// call মুলত সরাসরি মেথডটিকে অন্য একটি অবজেক্ট এর জন্য কাজ করে। 
// এক্ষেত্রে, bind এর মত একবার bind করে তারপর মেথড অনুযায়ী প্যারামিটার এর ভ্যলু আবার বলে দিতে হবেনা। 
// একসাথে call ব্যবহার করে, তারপর যে জায়গায় মুলত মেথড টি ব্যবহার করতে চাই, সেখান কার অবজেক্ট এর নাম এবং তারপর কমা দিয়ে, মেথডের প্যারামিটার ভ্যালু গুলো পাস করে দিতে হবে। 

// const collegeStudentScholarship = student.tuitionFee.call(collegeStudent, 1000); // ( 18000-1000 = 17000 )
// const collegeStudentScholarshipNew = student.tuitionFee.call(collegeStudent, 2000); // ( 17000-2000 = 15000)

// console.log(collegeStudentScholarshipNew);

// console.log(collegeStudent.scholarship); // 15000









// apply এর কাজ সেম call এর মত, শুধু তফাৎ হচ্ছে এখানে মেথডের প্যারামিটার ভ্যালু গুলো call এর মত কমা দিয়ে না দিয়ে array হিসেবে দিতে হবে।

const collegeStudentScholarship = student.tuitionFee.apply(collegeStudent, [1000]); // 17000 // যদি মেথডের প্যারামিটার একাদিক হয় থাকলে array আর ভিতর ভ্যালু ও বাড়বে।

console.log(collegeStudentScholarship);