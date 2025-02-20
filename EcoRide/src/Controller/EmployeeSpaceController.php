<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class EmployeeSpaceController extends AbstractController
{
    #[Route('/EmployeeSpace')]
    public function employeeSpace(): Response
    {
        return new Response("Bienvenue sur votre page espace employée!");
    }
}
