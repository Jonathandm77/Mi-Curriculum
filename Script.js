const stars = document.querySelectorAll('.stars');
    const photoFrame = document.querySelector('.photo-frame');

    stars.forEach(star => {
      star.addEventListener('click', function () {

        photoFrame.addEventListener("mouseenter", () => {
          photoFrame.style.boxShadow = "0 0 10px 5px rgba(126, 163, 189, 0.8)";
          photoFrame.style.transform = "scale(1.05)";
        });

        photoFrame.addEventListener("mouseleave", () => {
          photoFrame.style.boxShadow = "none";
          photoFrame.style.transform = "scale(1)";
        });
      });
    });