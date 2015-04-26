var intersectingLineSegments = function(K, L, M, N, P, Q, R, S) {
    var Line, firstLine, secondLine, intersectionX, intersectionY;
    
    Line = function(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.slope = (y2 - y1)/(x2 - x1);
        this.yIntercept = (-this.slope * x1) + y1;
    };
    firstLine = new Line(K, L, M, N);
    secondLine = new Line(P, Q, R, S);
    
    if(firstLine.slope === secondLine.slope) {
        if(firstLine.yIntercept === secondLine.yIntercept) return true;
        else return false;
    }

    // credit for this part to Wikipedia 
    // http://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_the_equations_of_the_lines
    intersectionX = (secondLine.yIntercept - firstLine.yIntercept)/(firstLine.slope - secondLine.slope);
    intersectionY = ((firstLine.slope * secondLine.yIntercept) - (secondLine.slope * firstLine.yIntercept))/(firstLine.slope - secondLine.slope);
    
    Line.prototype.isInXBounds = function(x) {
        if(this.x2 >= this.x1) {
            if(x < this.x1 || x > this.x2) return false;
        } else {
            if(x < this.x2 || x > this.x1) return false;
        }
        return true;
    };
    
    Line.prototype.isInYBounds = function(y) {
        if(this.y2 >= this.y1) {
            if(y < this.y1 || y > this.y2) return false;
        } else {
            if(y < this.y2 || y > this.y1) return false;
        }
        return true;
    };

    if (isNaN(intersectionX) || isNaN(intersectionY)) return false;
    else {
        return firstLine.isInXBounds(intersectionX)
        && secondLine.isInXBounds(intersectionX)
        && firstLine.isInYBounds(intersectionY)
        && secondLine.isInYBounds(intersectionY);
    }   
}
