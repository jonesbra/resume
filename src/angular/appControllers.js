app.controller('navCtrl', function($scope, $location, $window) {
  $scope.getClass = function(path) {
    if ($location.path()===path)
      return 'active item'

    else
      return 'item'
  }

  $scope.loadPage = function(url) {
    $window.location.href = url
  }
})

app.controller('gitCtrl', function($scope, $http) {
  var url = "https://localhost:3001/api/lastCommit"
/*
  $http({
    method: 'GET',
    url: url
  }).then(function successCallback(res) {
      console.log('success')
      console.log(res)
    }, function errorCallback(res) {
      console.log('failed')
      console.log(res)
    });*/
})

app.controller('transcriptCtrl', function($scope, $http) {

  // We will represent transcript as a list of academic semesters
  $scope.transcript = [
    // Semester 1
    {
      semester: 1,
      year: "2014",
      season: "Fall",
      completed: true,
      courses: [
        {
          name: 'Intro To Communications',
          prefix: "COM",
          number: "101",
          grade: "B",
          hours: 3,
          passFail: false
        },
        {
          name: 'Calculus One',
          prefix: "MA",
          number: "113",
          grade: "C",
          hours: 4,
          passFail: false
        },
        {
          name: 'Academic Orientation',
          prefix: "UK",
          number: "101",
          grade: "B",
          hours: 1,
          passFail: false
        },
        {
          name: 'Supplementary Math Workshop One: Calculus One',
          prefix: "UK",
          number: "101",
          grade: "P",
          hours: 1,
          passFail: true
        },
        {
          name: 'Computer Science Profession',
          prefix: "CS",
          number: "100",
          grade: "B",
          hours: 1,
          passFail: false
        },
        {
          name: 'Introduction To Computer Programming',
          prefix: "CS",
          number: "115",
          grade: "B",
          hours: 3,
          passFail: false
        },
        {
          name: 'Composition And Communication One',
          prefix: "WRD",
          number: "110",
          grade: "B",
          hours: 3,
          passFail: false
        }
      ]
    },
    // Semester 2
    {
      semester: 2,
      year: "2015",
      season: "Spring",
      completed: true,
      courses: [
        {
          name: 'Composition And Communication Two',
          prefix: "WRD",
          number: "111",
          grade: "A",
          hours: 3,
          passFail: false
        },
        {
          name: 'Introduction To Program Design',
          prefix: "CS",
          number: "215",
          grade: "A",
          hours: 4,
          passFail: false
        },
        {
          name: 'Supplementary Math Workshop Two: Calculus Two',
          prefix: "MA",
          number: "194",
          grade: "P",
          hours: 1,
          passFail: true
        },
        {
          name: 'Calculus Two',
          prefix: "MA",
          number: "114",
          grade: "A",
          hours: 4,
          passFail: false
        },
        {
          name: 'Basic Ideas of Biology',
          prefix: "BIO",
          number: "103",
          grade: "A",
          hours: 3,
          passFail: false
        }
      ]
    },
    // Semester 3
    {
      semester: 3,
      year: "2015",
      season: "Fall",
      completed: true,
      courses: [
        {
          name: 'Introduction To Software Engineering',
          prefix: "CS",
          number: "216",
          grade: "A",
          hours: 3,
          passFail: false
        },
        {
          name: 'Design Of Logic Circuits',
          prefix: "EE",
          number: "280",
          grade: "A",
          hours: 3,
          passFail: false
        },
        {
          name: 'General University Physics Laboratory',
          prefix: "PHY",
          number: "241",
          grade: "A",
          hours: 1,
          passFail: false
        },
        {
          name: 'General University Physics',
          prefix: "PHY",
          number: "231",
          grade: "A",
          hours: 4,
          passFail: false
        },
        {
          name: 'Calculus Three',
          prefix: "MA",
          number: "213",
          grade: "A",
          hours: 4,
          passFail: false
        }
      ]
    },
    // Semester 4
    {
      semester: 4,
      year: "2016",
      season: "Spring",
      completed: true,
      courses: [
        {
          name: 'Discrete Mathematics',
          prefix: "CS",
          number: "275",
          grade: "B",
          hours: 4,
          passFail: false
        },
        {
          name: 'Topics In Computer Science: Systems Programming',
          prefix: "CS",
          number: "485G",
          grade: "B",
          hours: 3,
          passFail: false
        },
        {
          name: 'General University Physics Laboratory',
          prefix: "PHY",
          number: "242",
          grade: "A",
          hours: 1,
          passFail: false
        },
        {
          name: 'General University Physics',
          prefix: "PHY",
          number: "232",
          grade: "B",
          hours: 4,
          passFail: false
        },
        {
          name: 'Calculus Four',
          prefix: "MA",
          number: "214",
          grade: "C",
          hours: 3,
          passFail: false
        }
      ]
    },
    // Semester 5
    {
      semester: 5,
      year: "2016",
      season: "Fall",
      completed: true,
      courses: [
        {
          name: 'General College Chemistry One',
          prefix: "CHE",
          number: "105",
          grade: "B",
          hours: 4,
          passFail: false
        },
        {
          name: 'Engineering Thermodynamics One',
          prefix: "ME",
          number: "220",
          grade: "B",
          hours: 3,
          passFail: false
        },
        {
          name: 'History Of The U.S. Since 1877',
          prefix: "HIS",
          number: "109",
          grade: "W",
          hours: 3,
          passFail: false
        },
        {
          name: 'Statics',
          prefix: "EM",
          number: "221",
          grade: "B",
          hours: 3,
          passFail: false
        },
        {
          name: 'Electrical Circuits/Electronics',
          prefix: "EE",
          number: "305",
          grade: "A",
          hours: 3,
          passFail: false
        }
      ]
    },
    // Semester 6
    {
      semester: 6,
      year: "2017",
      season: "Spring",
      completed: true,
      courses: [
        {
          name: 'General College Chemistry Two',
          prefix: "CHE",
          number: "107",
          grade: "C",
          hours: 3,
          passFail: false
        },
        {
          name: 'Fluid Mechanics',
          prefix: "ME",
          number: "330",
          grade: "C",
          hours: 3,
          passFail: false
        },
        {
          name: 'Engineering Thermodynamics Two',
          prefix: "ME",
          number: "321",
          grade: "D",
          hours: 3,
          passFail: false
        },
        {
          name: 'Manufacturing Engineering',
          prefix: "ME",
          number: "251",
          grade: "C",
          hours: 3,
          passFail: false
        },
        {
          name: 'Dynamics',
          prefix: "EM",
          number: "313",
          grade: "W",
          hours: 3,
          passFail: false
        },
        {
          name: 'Mechanics Of Deformable Solids',
          prefix: "EM",
          number: "302",
          grade: "D",
          hours: 3,
          passFail: false
        }
      ]
    },
    // Semester 7
    {
      semester: 7,
      year: "2018",
      season: "Fall",
      completed: true,
      courses: [
        {
          name: 'Dynamics',
          prefix: "EM",
          number: "313",
          grade: "D",
          hours: 3,
          passFail: false
        },
        {
          name: 'Elements Of Heat Transfer',
          prefix: "ME",
          number: "325",
          grade: "D",
          hours: 3,
          passFail: false
        },
        {
          name: 'Mechanical Design',
          prefix: "ME",
          number: "344",
          grade: "C",
          hours: 3,
          passFail: false
        },
        {
          name: 'Introduction To Mechanical Systems',
          prefix: "ME",
          number: "340",
          grade: "D",
          hours: 3,
          passFail: false
        },
        {
          name: 'Computer Aided Engineering Graphics',
          prefix: "ME",
          number: "205",
          grade: "C",
          hours: 3,
          passFail: false
        }
      ]
    }
  ]

  $scope.getGPA = function() {
    // Need these variables to calculate a GPA
    var qualityPoints = 0
    var qualityHours = 0

    // Loop through all of the semesters recorded in the transcript
    for (var s=0; s<$scope.transcript.length; s++) {
      let semester = $scope.transcript[s]
      // Check that the semester has been completed
      if (semester.completed) {
        for (var c=0; c<semester.courses.length; c++) {
          let course = semester.courses[c]
          if (!course.passFail && course.grade!=='W') {
            qualityHours += course.hours
            if (course.grade==='A')
              qualityPoints += course.hours*4
            else if (course.grade==='B')
              qualityPoints += course.hours*3
            else if (course.grade==='C')
              qualityPoints += course.hours*2
            else if (course.grade==='D')
              qualityPoints += course.hours*1
            else
              qualityPoints += 0
          }
        }
      }
    }

    return (qualityPoints/qualityHours).toFixed(2).toString()
  }

  $scope.getCreditHours = function() {
    var qualityHours = 0

    // Loop through all of the semesters recorded in the transcript
    for (var sem=0; sem<$scope.transcript.length; sem++) {
      let semester = $scope.transcript[sem]
      // Check that the semester has been completed
      if (semester.completed) {
        for (var c=0; c<semester.courses.length; c++) {
          let course = semester.courses[c]
          if (!course.passFail && course.grade!=='W')
            qualityHours += course.hours
        }
      }
    }
    return qualityHours.toString()
  }

})
