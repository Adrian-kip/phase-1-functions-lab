require ( './helpers.js' );

describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
    });

    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(50)).to.equal(8);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInBlocks(34)).to.equal(8);
    });
  });

  describe('distanceFromHqInFeet()', function() {
    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    });

    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(50)).to.equal(2112);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInFeet(34)).to.equal(2112);
    });
  });

  describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    });
  });

  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });
  });
});
/* 
// index.js

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  const hq = 42; // Assuming HQ is on 42nd street
  return Math.abs(someValue - hq);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  const feetPerBlock = 264; // Each block is 264 feet
  return blocks * feetPerBlock;
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  const feetPerBlock = 264;
  return blocksTravelled * feetPerBlock;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0; // First 400 feet are free
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; // 2 cents per foot
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
  } else {
    return 'cannot travel that far'; // No rides over 2500 feet
  }
}

// Export the functions to make them available for tests
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};
*/
