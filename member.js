function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/member.html',
        scope: {
            member: '=',
            skills: '='
        },
        controller: function($scope) {
            $scope.getSkillName = function(skillId) {
                for (var i = 0; i < $scope.skills.length; i++) {
                    if ($scope.skills[i].id == skillId) {
                        return $scope.skills[i].name;
                    }
                }
            };
        }
    };
}